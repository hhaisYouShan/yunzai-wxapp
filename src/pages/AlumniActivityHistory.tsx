import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface AlumniActivityHistoryItem {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  viewedAt: number;
}

const AlumniActivityHistory = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<AlumniActivityHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('alumni-activity-history');
    if (stored) {
      const parsed = JSON.parse(stored);
      setHistory(parsed.sort((a: AlumniActivityHistoryItem, b: AlumniActivityHistoryItem) => b.viewedAt - a.viewedAt));
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
              onClick={() => navigate(`/alumni/activity/${item.id}`)}
            >
              <div className="flex gap-3 p-3">
                <div className="relative w-32 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-sm line-clamp-2 mb-2">{item.title}</h3>
                    <div className="space-y-1">
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </p>
                    </div>
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

export default AlumniActivityHistory;
