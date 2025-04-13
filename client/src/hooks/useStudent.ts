import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Student } from "@/types/student";

export function useStudent() {
  // Fetch all students
  const { 
    data: students = [], 
    isLoading,
    error
  } = useQuery<Student[]>({
    queryKey: ["/api/students"],
  });

  // Create a new student
  const { mutateAsync: createStudent } = useMutation({
    mutationFn: async (student: Omit<Student, "id">) => {
      const res = await apiRequest("POST", "/api/students", student);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/students"] });
    },
  });

  // Update an existing student
  const { mutateAsync: updateStudent } = useMutation({
    mutationFn: async (params: { id: number; data: Omit<Student, "id"> }) => {
      const { id, data } = params;
      const res = await apiRequest("PUT", `/api/students/${id}`, data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/students"] });
    },
  });

  // Delete a student
  const { mutateAsync: deleteStudent } = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/students/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/students"] });
    },
  });

  return {
    students,
    isLoading,
    error,
    createStudent: (data: Omit<Student, "id">) => createStudent(data),
    updateStudent: (id: number, data: Omit<Student, "id">) => 
      updateStudent({ id, data }),
    deleteStudent: (id: number) => deleteStudent(id),
  };
}
