import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users as UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { ActivityItem } from "./FeaturedActivityCard";

interface ActivitiesListProps {
  activities: (ActivityItem & { participants: number })[];
}

const ActivitiesList = ({ activities }: ActivitiesListProps) => {
  return (
    <section className="px-4 mb-6 animate-fade-in">
      <h2 className="font-bold text-foreground mb-3">校友会活动</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="overflow-hidden hover:shadow-[var(--shadow-medium)] transition-shadow">
            <div className="flex gap-4 p-4">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-28 h-28 object-cover rounded-lg flex-shrink-0 border border-border"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground mb-2 line-clamp-1">{activity.title}</h3>
                <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                  <p className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{activity.date}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    <span>{activity.location}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <UsersIcon className="w-3.5 h-3.5 text-primary" />
                    <span>{activity.participants}人参与</span>
                  </p>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{activity.description}</p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <Link to={`/alumni/activity/${activity.id}`} className="block">
                <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/5 hover:border-primary">
                  查看详情
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesList;
