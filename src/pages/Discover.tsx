import { useState } from "react";
import { Bell } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";

const Discover = () => {
  const [activeTab, setActiveTab] = useState("dynamics");

  const tabs = [
    { id: "dynamics", label: "国研动态" },
    { id: "interview", label: "教师采访" },
    { id: "review", label: "课程回顾" },
    { id: "gallery", label: "活动图集" },
  ];

  const newsData = {
    dynamics: [
      {
        id: 1,
        title: "课后回顾｜金融科技与资产证券化：未来金融市场的发展趋势",
        category: "国研动态",
        date: "2025-08-22",
        views: 108,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      },
      {
        id: 2,
        title: "面授课程｜国研·粤港澳大湾区博士班——《私募股权投资》",
        category: "国研动态",
        date: "2024-09-27",
        views: 56,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      },
    ],
    interview: [
      {
        id: 3,
        title: "韦佳妮：搭班子、建团队",
        category: "教师采访",
        date: "2025-08-18",
        views: 12,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        id: 4,
        title: "陈章博：探索个人成长与企业发展的双向赋能",
        category: "教师采访",
        date: "2025-08-15",
        views: 12,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
    ],
    review: [
      {
        id: 5,
        title: "组织与领导行为-线下博士班精彩回顾",
        category: "课程回顾",
        date: "2024-07-30",
        views: 1031,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400",
      },
      {
        id: 6,
        title: "克莱蒙上海分校开业",
        category: "课程回顾",
        date: "2024-09-27",
        views: 436,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
      },
    ],
    gallery: [
      {
        id: 7,
        title: "CEDEU校长参访玉禾田企业",
        category: "活动图集",
        date: "2025-08-10",
        views: 20,
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
      },
      {
        id: 8,
        title: "数智时代营销战略课程",
        category: "活动图集",
        date: "2025-07-15",
        views: 57,
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <h1 className="text-xl font-bold text-foreground">发现</h1>
          <button className="p-2">
            <Bell className="w-5 h-5 text-foreground" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4 space-y-3">
        {newsData[activeTab as keyof typeof newsData].map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
