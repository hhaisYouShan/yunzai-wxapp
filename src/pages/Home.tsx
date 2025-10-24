import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Users, GraduationCap, ChevronRight, Calendar, Video, School, Briefcase, Star } from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import logo from "@/assets/logo.png";
import vipCoursePoster from "@/assets/vip-course-poster.jpg";

const Home = () => {
  const navigate = useNavigate();

  const banners = [
    { id: 1, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", title: "新学期课程火热报名中" },
    { id: 2, image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", title: "名师直播课即将开始" },
  ];

  const features = [
    { icon: School, label: "学校", color: "text-primary", to: "/school" },
    { icon: GraduationCap, label: "研修班", color: "text-primary", to: "/training-programs" },
    { icon: BookOpen, label: "专栏系列", color: "text-accent", to: "/discover" },
    { icon: Users, label: "校友会", color: "text-accent", to: "/alumni" },
  ];

  // 直播预告
  const livePreview = {
    id: 1,
    title: "金融科技创新与实践",
    teacher: "张教授",
    date: "2025-10-25",
    time: "19:00-21:00",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
    viewers: 1280,
  };

  // 知识热点（视频）
  const hotVideos = [
    {
      id: 1,
      title: "数字经济时代的商业模式创新",
      duration: "12:35",
      views: 8520,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
    {
      id: 2,
      title: "人工智能在教育领域的应用",
      duration: "15:20",
      views: 6830,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
    },
    {
      id: 3,
      title: "区块链技术与金融创新",
      duration: "18:45",
      views: 5670,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",
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
    {
      id: 3,
      title: "数字化转型实战课程",
      teacher: "赵教授",
      price: 2980,
      students: 189,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      type: "video" as const,
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
            <Card 
              key={feature.label} 
              className="p-4 text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => navigate(feature.to)}
            >
              <feature.icon className={`w-8 h-8 mx-auto mb-2 ${feature.color}`} />
              <p className="text-sm font-medium text-foreground">{feature.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* VIP Course Poster */}
      <div className="px-4 py-3">
        <Card 
          className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer relative hover:scale-[1.02]"
          onClick={() => navigate('/vip-course/1')}
        >
          <div className="relative">
            <img
              src={vipCoursePoster}
              alt="大咖课"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">大咖课</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Live Preview */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">直播预告</h2>
          <button 
            onClick={() => navigate('/live-schedule')} 
            className="flex items-center text-sm text-muted-foreground"
          >
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <Card 
          className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
          onClick={() => navigate(`/courses/${livePreview.id}`)}
        >
          <div className="relative h-40">
            <img
              src={livePreview.image}
              alt={livePreview.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {livePreview.date} {livePreview.time}
            </div>
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <Users className="w-3 h-3" />
              {livePreview.viewers}人预约
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-base text-foreground mb-2">{livePreview.title}</h3>
            <p className="text-sm text-muted-foreground">{livePreview.teacher}</p>
          </div>
        </Card>
      </div>

      {/* Hot Videos */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">知识热点</h2>
          <button 
            onClick={() => navigate('/discover')} 
            className="flex items-center text-sm text-muted-foreground"
          >
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {hotVideos.map((video) => (
            <Card 
              key={video.id}
              className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/news/${video.id}`)}
            >
              <div className="relative">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-28 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm text-foreground line-clamp-2 mb-2">
                  {video.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Video className="w-3 h-3" />
                  {video.views}次观看
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Hot Courses */}
      <div className="px-4 py-3 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">热门课程</h2>
          <button 
            onClick={() => navigate('/courses')} 
            className="flex items-center text-sm text-muted-foreground"
          >
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
