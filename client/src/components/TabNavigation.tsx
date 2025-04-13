import { Link, useLocation } from "wouter";

interface TabNavigationProps {
  activeTab: "students" | "analytics";
}

export default function TabNavigation({ activeTab }: TabNavigationProps) {
  const [location, setLocation] = useLocation();

  return (
    <div className="mb-6 border-b border-gray-200">
      <div className="flex space-x-8">
        <Link href="/">
          <a 
            className={`py-4 px-1 border-b-2 font-medium ${
              activeTab === "students"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            Students
          </a>
        </Link>
        <Link href="/analytics">
          <a 
            className={`py-4 px-1 border-b-2 font-medium ${
              activeTab === "analytics"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            Analytics
          </a>
        </Link>
      </div>
    </div>
  );
}
