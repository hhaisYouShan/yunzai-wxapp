import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import icons from "@/lib/icons";

interface NewsCardProps {
  news: {
    id: number;
    title: string;
    category: string;
    date: string;
    views: number;
    image: string;
  };
  isHot?: boolean;
}

const getCategoryIcon = (category: string) => {
  const icons: { [key: string]: { color: string; bg: string; icon: string } } = {
    "国研动态": { color: "text-red-600", bg: "bg-red-50", icon: "📰" },
    "教师采访": { color: "text-orange-600", bg: "bg-orange-50", icon: "🎤" },
    "课程回顾": { color: "text-blue-600", bg: "bg-blue-50", icon: "📚" },
    "活动图集": { color: "text-purple-600", bg: "bg-purple-50", icon: "📸" },
  };
  return icons[category] || { color: "text-gray-600", bg: "bg-gray-50", icon: "📄" };
};

export const NewsCard = ({ news, isHot = false }: NewsCardProps) => {
  const navigate = useNavigate();
  const categoryStyle = getCategoryIcon(news.category);

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer relative group"
      onClick={() => navigate(`/news/${news.id}`)}
    >
      {/* Hot Badge */}
      {isHot && (
        <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 shadow-lg">
          <img src={icons.TrendingUp} alt="" className="w-3 h-3" />
          热门
        </div>
      )}

      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Category Badge */}
        <div className={`inline-flex items-center gap-1 ${categoryStyle.bg} ${categoryStyle.color} text-xs px-2 py-1 rounded`}>
          <span>{categoryStyle.icon}</span>
          <span className="font-medium">{news.category}</span>
          <span className="text-muted-foreground">· {news.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-medium text-sm text-foreground line-clamp-2 leading-snug">
          {news.title}
        </h3>

        {/* Footer Actions */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <img src={icons.ThumbsUp} alt="" className="w-3.5 h-3.5" />
            <span>{Math.floor(news.views / 10)}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <img src={icons.MessageCircle} alt="" className="w-3.5 h-3.5" />
            <span>{Math.floor(news.views / 20)}</span>
          </button>
        </div>
      </div>
    </Card>
  );
};
