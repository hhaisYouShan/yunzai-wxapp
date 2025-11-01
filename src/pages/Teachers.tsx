import { useState } from "react";
import { Search, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TeacherCard } from "@/components/TeacherCard";

const Teachers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
    {
      id: 3,
      name: "王明华",
      title: "金融科技专家",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      courses: 15,
    },
    {
      id: 4,
      name: "李雪梅",
      title: "战略管理教授",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      courses: 10,
    },
    {
      id: 5,
      name: "张伟强",
      title: "创新创业导师",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      courses: 9,
    },
    {
      id: 6,
      name: "刘晓敏",
      title: "商业模式专家",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      courses: 11,
    },
  ];

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="px-4 py-3 flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            aria-label="返回"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索讲师"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            未找到相关讲师
          </div>
        )}
      </div>
    </div>
  );
};

export default Teachers;
