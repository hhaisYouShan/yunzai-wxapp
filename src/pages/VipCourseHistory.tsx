import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface VipCourseHistoryItem {
  id: number;
  title: string;
  speaker: string;
  poster: string;
  viewedAt: number;
}

const VipCourseHistory = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<VipCourseHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('vip-course-history');
    if (stored) {
      const parsed = JSON.parse(stored);
      setHistory(parsed.sort((a: VipCourseHistoryItem, b: VipCourseHistoryItem) => b.viewedAt - a.viewedAt));
    }
  }, []);

  const formatTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    return `${days}天前`;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center px-4 py-3 gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            aria-label="返回"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">浏览历史</h1>
        </div>
      </div>

      {/* History List */}
      <div className="px-4 py-4 space-y-3">
        {history.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">暂无浏览记录</p>
          </div>
        ) : (
          history.map((item) => (
            <Card 
              key={`${item.id}-${item.viewedAt}`}
              className="overflow-hidden cursor-pointer hover:shadow-md transition-all"
              onClick={() => navigate(`/vip-course/${item.id}`)}
            >
              <div className="flex gap-3 p-3">
                <div className="relative w-32 h-24 flex-shrink-0">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute top-1 left-1 bg-amber-500 text-white px-2 py-0.5 rounded flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3" fill="currentColor" />
                    大咖课
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-sm line-clamp-2 mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.speaker}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatTime(item.viewedAt)}
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default VipCourseHistory;
