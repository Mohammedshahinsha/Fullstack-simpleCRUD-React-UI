import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppHeader() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <h1 className="text-xl font-medium">Student Management System</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-light text-white">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
