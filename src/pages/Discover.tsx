import { useState } from "react";
import icons from "@/lib/icons";
import { Button } from "@/components/ui/button";
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
      {
        id: 9,
        title: "重磅发布｜国研院2025年度招生简章正式发布",
        category: "国研动态",
        date: "2025-08-20",
        views: 245,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400",
      },
      {
        id: 10,
        title: "企业数字化转型与创新管理专题研讨会成功举办",
        category: "国研动态",
        date: "2025-08-15",
        views: 189,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      },
      {
        id: 11,
        title: "国研院与多家企业签署战略合作协议",
        category: "国研动态",
        date: "2025-08-10",
        views: 156,
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
      },
      {
        id: 12,
        title: "2025年春季学期开学典礼圆满举行",
        category: "国研动态",
        date: "2025-08-05",
        views: 223,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
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
      {
        id: 13,
        title: "王教授：金融科技如何重塑传统银行业务",
        category: "教师采访",
        date: "2025-08-12",
        views: 134,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        id: 14,
        title: "李教授：人工智能时代的企业战略管理",
        category: "教师采访",
        date: "2025-08-08",
        views: 178,
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
      {
        id: 15,
        title: "张教授：数字经济下的商业模式创新",
        category: "教师采访",
        date: "2025-08-03",
        views: 156,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      },
      {
        id: 16,
        title: "刘教授：可持续发展与企业社会责任",
        category: "教师采访",
        date: "2025-07-28",
        views: 98,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
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
      {
        id: 17,
        title: "战略管理与商业模式创新课程精彩回顾",
        category: "课程回顾",
        date: "2025-08-14",
        views: 567,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
      },
      {
        id: 18,
        title: "投资学与资本运作实战课程回顾",
        category: "课程回顾",
        date: "2025-08-07",
        views: 489,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
      },
      {
        id: 19,
        title: "数字营销与品牌管理课程精彩瞬间",
        category: "课程回顾",
        date: "2025-07-30",
        views: 678,
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400",
      },
      {
        id: 20,
        title: "创新思维与设计思维工作坊圆满结束",
        category: "课程回顾",
        date: "2025-07-22",
        views: 534,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400",
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
      {
        id: 21,
        title: "2025年毕业典礼精彩瞬间",
        category: "活动图集",
        date: "2025-08-16",
        views: 345,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400",
      },
      {
        id: 22,
        title: "企业参访活动｜走进科技创新企业",
        category: "活动图集",
        date: "2025-08-09",
        views: 278,
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400",
      },
      {
        id: 23,
        title: "校友企业家论坛精彩图集",
        category: "活动图集",
        date: "2025-08-02",
        views: 412,
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
      },
      {
        id: 24,
        title: "国际学术交流周活动回顾",
        category: "活动图集",
        date: "2025-07-25",
        views: 298,
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400",
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
            <img src={icons.Bell} alt="" className="w-5 h-5" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-none relative ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-300" />
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Content - Masonry Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {newsData[activeTab as keyof typeof newsData].map((item, index) => (
            <NewsCard 
              key={item.id} 
              news={item} 
              isHot={item.views > 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
