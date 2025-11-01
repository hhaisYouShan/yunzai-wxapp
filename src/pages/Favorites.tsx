import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import icons from "@/lib/icons";

const Favorites = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("courses");

  const favoriteCourses = [
    {
      id: 1,
      title: "金融科技与投资管理",
      teacher: "王教授",
      price: 3980,
      students: 156,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    },
    {
      id: 2,
      title: "企业战略与创新管理",
      teacher: "李教授",
      price: 4980,
      students: 203,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    },
  ];

  const favoriteTeachers = [
    {
      id: 1,
      name: "韦佳妮",
      title: "新商学研究院院长",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      courses: 12,
    },
    {
      id: 2,
      name: "陈章博",
      title: "深圳科商投资创始人",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      courses: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <img src={icons.ChevronLeft} alt="" className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-foreground">收藏记录</h1>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full grid grid-cols-2 mb-4">
            <TabsTrigger value="courses">课程</TabsTrigger>
            <TabsTrigger value="teachers">讲师</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-3 mt-0">
            {favoriteCourses.map((course) => (
              <Link key={course.id} to={`/courses/${course.id}`}>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex gap-3">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground line-clamp-2 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{course.teacher}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">¥{course.price}</span>
                        <span className="text-xs text-muted-foreground">
                          {course.students}人已学
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
            {favoriteCourses.length === 0 && (
              <div className="text-center py-12">
                <img src={icons.Heart} alt="" className="w-16 h-16 mx-auto opacity-50 mb-4" />
                <p className="text-muted-foreground">暂无收藏的课程</p>
                <Link to="/courses">
                  <Button variant="outline" className="mt-4">
                    去看看课程
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="teachers" className="space-y-3 mt-0">
            <div className="grid grid-cols-2 gap-3">
              {favoriteTeachers.map((teacher) => (
                <Link key={teacher.id} to={`/teachers/${teacher.id}`}>
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full aspect-square rounded-lg object-cover mb-3"
                    />
                    <h3 className="font-medium text-foreground mb-1">{teacher.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                      {teacher.title}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {teacher.courses}门课程
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            {favoriteTeachers.length === 0 && (
              <div className="text-center py-12">
                <img src={icons.Users} alt="" className="w-16 h-16 mx-auto opacity-50 mb-4" />
                <p className="text-muted-foreground">暂无收藏的讲师</p>
                <Link to="/discover">
                  <Button variant="outline" className="mt-4">
                    去看看讲师
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Favorites;
