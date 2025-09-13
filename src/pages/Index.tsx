import { useState } from "react";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard"; 
import StudyTools from "@/components/StudyTools";
import Community from "@/components/Community";
import Profile from "@/components/Profile";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "study":
        return <StudyTools />;
      case "community":
        return <Community />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <div className="lg:pl-64 pb-16 lg:pb-0 pt-16 lg:pt-0">
        <main className="container mx-auto px-4 py-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;