import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/CourseCard";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "全部" },
    { id: "video", label: "视频课" },
    { id: "live", label: "直播课" },
  ];

  const courses = [
    {
      id: 1,
      title: "金融科技与投资管理",
      teacher: "王教授",
      price: 3980,
      students: 156,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      type: "video" as const,
    },
    {
      id: 2,
      title: "企业战略与创新管理",
      teacher: "李教授",
      price: 4980,
      students: 203,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
      type: "live" as const,
    },
    {
      id: 3,
      title: "数字化转型与领导力",
      teacher: "张教授",
      price: 2980,
      students: 89,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      type: "video" as const,
    },
    {
      id: 4,
      title: "商业模式创新",
      teacher: "刘教授",
      price: 3580,
      students: 127,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
      type: "live" as const,
    },
  ];

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses.filter(c => c.type === activeTab);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索课程"
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Course List */}
      <div className="px-4 py-4 space-y-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
