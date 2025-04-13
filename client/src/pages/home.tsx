import { useState } from "react";
import { useLocation } from "wouter";
import TabNavigation from "@/components/TabNavigation";
import StudentTable from "@/components/StudentTable";
import StudentForm from "@/components/StudentForm";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useToast } from "@/hooks/use-toast";
import { useStudent } from "@/hooks/useStudent";
import { Student } from "@/types/student";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

export default function Home() {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [studentToDelete, setStudentToDelete] = useState<number | null>(null);

  const { 
    students, 
    isLoading,
    createStudent, 
    updateStudent, 
    deleteStudent,
    error 
  } = useStudent();

  const filteredStudents = students?.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setIsModalOpen(true);
  };

  const handleEditStudent = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleDeleteStudent = (id: number) => {
    setStudentToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (studentToDelete === null) return;
    
    try {
      await deleteStudent(studentToDelete);
      toast({
        title: "Success",
        description: "Student deleted successfully",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete student",
        variant: "destructive",
      });
    } finally {
      setIsDeleteModalOpen(false);
      setStudentToDelete(null);
    }
  };

  const handleSaveStudent = async (studentData: Omit<Student, 'id'>) => {
    try {
      if (selectedStudent) {
        await updateStudent(selectedStudent.id, studentData);
        toast({
          title: "Success",
          description: "Student updated successfully",
          variant: "default",
        });
      } else {
        await createStudent(studentData);
        toast({
          title: "Success",
          description: "Student added successfully",
          variant: "default",
        });
      }
      setIsModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 md:px-6">
      <TabNavigation activeTab="students" />
      
      <div className="space-y-6">
        {/* Action Bar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-medium text-gray-900">Student Records</h2>
            <span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
              {filteredStudents.length}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative flex items-center">
              <Search className="absolute left-3 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 w-full sm:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button 
              onClick={handleAddStudent}
              className="flex items-center justify-center space-x-1"
            >
              <Plus className="h-4 w-4" />
              <span>Add Student</span>
            </Button>
          </div>
        </div>
        
        {/* Student Table */}
        <StudentTable 
          students={filteredStudents}
          isLoading={isLoading}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />
      </div>
      
      {/* Student Form Modal */}
      <StudentForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveStudent}
        student={selectedStudent}
      />
      
      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        description="Are you sure you want to delete this student? This action cannot be undone."
        confirmText="Delete"
        variant="destructive"
      />
    </div>
  );
}
