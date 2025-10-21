import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Users, GraduationCap, ChevronRight, Calendar, Video } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { CourseCard } from "@/components/CourseCard";
import { TeacherCard } from "@/components/TeacherCard";
import logo from "@/assets/logo.png";

const Home = () => {
  const banners = [
    { id: 1, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", title: "新学期课程火热报名中" },
    { id: 2, image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", title: "名师直播课即将开始" },
  ];

  const features = [
    { icon: Video, label: "视频课", color: "text-primary", to: "/courses?type=video" },
    { icon: PlayCircle, label: "直播课", color: "text-primary", to: "/courses?type=live" },
    { icon: GraduationCap, label: "名师团队", color: "text-accent", to: "/teachers" },
    { icon: Users, label: "校友会", color: "text-accent", to: "/alumni" },
  ];

  const news = [
    {
      id: 1,
      title: "课后回顾｜金融科技与资产证券化：未来金融市场的...",
      category: "国研动态",
      date: "2025-08-22",
      views: 108,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
    {
      id: 2,
      title: "CEDEU学院优秀新生独家专访｜谢金杏与尹晓宁的求...",
      category: "教师采访",
      date: "2025-08-15",
      views: 107,
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400",
    },
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
  ];

  const teachers = [
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
      {/* Header with Logo */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="国研在线" className="w-8 h-8" />
          <h1 className="text-lg font-bold text-foreground">国研在线</h1>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={banners[0].image}
          alt={banners[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h2 className="text-white text-xl font-bold px-4 pb-4">{banners[0].title}</h2>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 py-5">
        <div className="grid grid-cols-4 gap-3">
          {features.map((feature) => (
            <Link key={feature.label} to={feature.to}>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <feature.icon className={`w-8 h-8 mx-auto mb-2 ${feature.color}`} />
                <p className="text-sm font-medium text-foreground">{feature.label}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Hot Courses */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">热门课程</h2>
          <Link to="/courses" className="flex items-center text-sm text-muted-foreground">
            更多 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Featured Teachers */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">名师团队</h2>
          <Link to="/teachers" className="flex items-center text-sm text-muted-foreground">
            更多 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>

      {/* News */}
      <div className="px-4 py-3 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">最新资讯</h2>
          <Link to="/news" className="flex items-center text-sm text-muted-foreground">
            更多 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-3">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
