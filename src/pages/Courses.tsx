import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import icons from "@/lib/icons";

const Courses = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("degree");

  const tabs = [
    { id: "degree", label: "学位班" },
    { id: "training", label: "研修班" },
    { id: "popular", label: "热门课程" },
  ];

  // 已购买的课程数据
  const purchasedCourses = [
    {
      id: 1,
      title: "清华大学金融MBA学位班",
      teacher: "王教授",
      progress: 35,
      totalLessons: 48,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
      type: "degree" as const,
      school: "清华大学",
    },
    {
      id: 2,
      title: "北京大学工商管理博士学位班",
      teacher: "李教授",
      progress: 20,
      totalLessons: 60,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
      type: "degree" as const,
      school: "北京大学",
    },
    {
      id: 3,
      title: "企业战略创新高级研修班",
      teacher: "张教授",
      progress: 60,
      totalLessons: 24,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
      type: "training" as const,
      duration: "3个月",
    },
    {
      id: 4,
      title: "数字化转型领导力研修班",
      teacher: "刘教授",
      progress: 45,
      totalLessons: 30,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      type: "training" as const,
      duration: "4个月",
    },
    {
      id: 5,
      title: "金融科技与投资管理",
      teacher: "赵教授",
      progress: 80,
      totalLessons: 32,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      type: "popular" as const,
      price: 3980,
    },
    {
      id: 6,
      title: "人工智能与商业应用",
      teacher: "陈教授",
      progress: 15,
      totalLessons: 28,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
      type: "popular" as const,
      price: 2980,
    },
  ];

  const filteredCourses = purchasedCourses.filter(c => c.type === activeTab);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="px-4 py-3">
          <div className="relative">
            <img src={icons.Search} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
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
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Card 
              key={course.id} 
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <div className="flex gap-4 p-4">
                <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-1 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{course.teacher}</p>
                    {course.type === "degree" && course.school && (
                      <Badge variant="secondary" className="text-xs mb-2">
                        {course.school}
                      </Badge>
                    )}
                    {course.type === "training" && course.duration && (
                      <Badge variant="secondary" className="text-xs mb-2">
                        {course.duration}
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>学习进度</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      已学习 {Math.round(course.totalLessons * course.progress / 100)}/{course.totalLessons} 节课
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>暂无已购买的课程</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
