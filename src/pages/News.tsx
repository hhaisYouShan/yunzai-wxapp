import { useState } from "react";
import icons from "@/lib/icons";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { NewsCard } from "@/components/NewsCard";

const News = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("dynamics");

  const tabs = [
    { id: "dynamics", label: "国研动态" },
    { id: "interview", label: "教师采访" },
    { id: "review", label: "课程回顾" },
  ];

  const allNews = [
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
      title: "CEDEU学院优秀新生独家专访｜谢金杏与尹晓宁的求学之路",
      category: "教师采访",
      date: "2025-08-15",
      views: 107,
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400",
    },
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
      title: "组织与领导行为-线下博士班精彩回顾",
      category: "课程回顾",
      date: "2024-07-30",
      views: 1031,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400",
    },
    {
      id: 5,
      title: "面授课程｜国研·粤港澳大湾区博士班——《私募股权投资》",
      category: "国研动态",
      date: "2024-09-27",
      views: 56,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    },
    {
      id: 6,
      title: "陈章博：探索个人成长与企业发展的双向赋能",
      category: "教师采访",
      date: "2025-08-15",
      views: 12,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      id: 7,
      title: "克莱蒙上海分校开业典礼圆满举行",
      category: "课程回顾",
      date: "2024-09-27",
      views: 436,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
    },
    {
      id: 8,
      title: "国研博士班｜宏观经济形势分析与政策解读专题讲座",
      category: "国研动态",
      date: "2025-08-05",
      views: 234,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    },
    {
      id: 9,
      title: "李明教授：数字化转型时代的企业战略创新",
      category: "教师采访",
      date: "2025-07-28",
      views: 189,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    {
      id: 10,
      title: "战略管理课程回顾｜企业竞争优势构建实战演练",
      category: "课程回顾",
      date: "2025-07-20",
      views: 567,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    },
    {
      id: 11,
      title: "重磅｜国研商学院与世界知名大学达成战略合作",
      category: "国研动态",
      date: "2025-07-15",
      views: 892,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
    },
    {
      id: 12,
      title: "张华博士：人工智能驱动的商业模式创新探索",
      category: "教师采访",
      date: "2025-07-10",
      views: 345,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      id: 13,
      title: "金融投资与风险管理课程精彩回顾",
      category: "课程回顾",
      date: "2025-07-05",
      views: 423,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400",
    },
    {
      id: 14,
      title: "国研商学院2025年春季学位授予典礼圆满举行",
      category: "国研动态",
      date: "2025-06-28",
      views: 678,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
    },
    {
      id: 15,
      title: "王教授专访：全球化背景下的企业国际化战略",
      category: "教师采访",
      date: "2025-06-20",
      views: 267,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
  ];

  const getCategoryKey = (category: string) => {
    const map: Record<string, string> = {
      "国研动态": "dynamics",
      "教师采访": "interview",
      "课程回顾": "review",
    };
    return map[category] || "";
  };

  const filteredNews = allNews.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = getCategoryKey(news.category) === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <img src={icons.ChevronLeft} alt="" className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <img src={icons.Search} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
            <Input
              placeholder="搜索资讯"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
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

      {/* News List */}
      <div className="px-4 py-4 space-y-4">
        {filteredNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}

        {filteredNews.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            未找到相关资讯
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
