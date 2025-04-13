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
          <span 
            className={`py-4 px-1 border-b-2 font-medium cursor-pointer ${
              activeTab === "students"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            Students
          </span>
        </Link>
        <Link href="/analytics">
          <span 
            className={`py-4 px-1 border-b-2 font-medium cursor-pointer ${
              activeTab === "analytics"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            Analytics
          </span>
        </Link>
      </div>
    </div>
  );
}
