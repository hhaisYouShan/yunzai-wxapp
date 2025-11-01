import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import icons from "@/lib/icons";

export interface ActivityItem {
  id: number | string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

interface FeaturedActivityCardProps {
  activity: ActivityItem;
  onView: (id: ActivityItem["id"]) => void;
}

const FeaturedActivityCard = ({ activity, onView }: FeaturedActivityCardProps) => {
  return (
    <section className="px-4 py-6">
      <Card className="overflow-hidden bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/70 border-primary/20 animate-enter">
        <div className="relative w-full h-40 sm:h-44">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 left-2">
            <Badge className="text-xs">活动预告</Badge>
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-bold text-base text-foreground mb-1 line-clamp-2">{activity.title}</h2>
          <div className="space-y-1 mb-2 text-xs text-muted-foreground">
            <p className="flex items-center gap-2">
              <img src={icons.Calendar} alt="" className="w-3.5 h-3.5" />
              <span>{activity.date}</span>
            </p>
            <p className="flex items-center gap-2">
              <img src={icons.MapPin} alt="" className="w-3.5 h-3.5" />
              <span>{activity.location}</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{activity.description}</p>
          <Button onClick={() => onView(activity.id)} className="w-full">查看详情</Button>
        </div>
      </Card>
    </section>
  );
};

export default FeaturedActivityCard;
