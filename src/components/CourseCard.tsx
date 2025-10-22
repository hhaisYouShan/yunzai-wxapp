import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Users, Video, PlayCircle } from "lucide-react";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    teacher: string;
    price: number;
    students: number;
    image: string;
    type: "video" | "live";
  };
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      <div className="flex gap-3">
        <div className="relative w-32 h-24 flex-shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded flex items-center gap-1">
            {course.type === "video" ? <Video className="w-3 h-3" /> : <PlayCircle className="w-3 h-3" />}
            {course.type === "video" ? "视频课" : "直播课"}
          </div>
        </div>
        <div className="flex-1 p-3 flex flex-col justify-between">
          <h3 className="font-medium text-sm text-foreground line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              <p>{course.teacher}</p>
              <p className="flex items-center gap-1 mt-1">
                <Users className="w-3 h-3" />
                {course.students}人已学
              </p>
            </div>
            <p className="text-primary font-bold">¥{course.price}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
