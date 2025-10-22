import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

interface NewsCardProps {
  news: {
    id: number;
    title: string;
    category: string;
    date: string;
    views: number;
    image: string;
  };
}

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link to={`/news/${news.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex gap-3 p-3 items-end">
          <div className="flex-1 flex flex-col justify-between min-h-[80px]">
            <h3 className="font-medium text-sm text-foreground line-clamp-2">
              {news.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
              <span>{news.category}</span>
              <span>·</span>
              <span>{news.date}</span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {news.views}
              </span>
            </div>
          </div>
          <img
            src={news.image}
            alt={news.title}
            className="w-24 h-20 object-cover rounded-md flex-shrink-0"
          />
        </div>
      </Card>
    </Link>
  );
};
