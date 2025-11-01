import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import icons from "@/lib/icons";

interface TeacherCardProps {
  teacher: {
    id: number;
    name: string;
    title: string;
    image: string;
    courses: number;
  };
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => navigate(`/teachers/${teacher.id}`)}
    >
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-3">
        <h3 className="font-bold text-foreground mb-1">{teacher.name}</h3>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{teacher.title}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <img src={icons.BookOpen} alt="" className="w-3 h-3" />
          <span>{teacher.courses}门课程</span>
        </div>
      </div>
    </Card>
  );
};
