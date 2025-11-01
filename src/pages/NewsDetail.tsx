import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import icons from "@/lib/icons";
import { Button } from "@/components/ui/button";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const news = {
    id: 1,
    title: "国研商学院2024年春季招生启动",
    category: "学院动态",
    date: "2024-01-15",
    views: 1234,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
    content: `
      <p>国研商学院2024年春季招生工作已全面启动，本次招生涵盖MBA、EMBA、DBA等多个学位项目。</p>
      
      <h3>招生项目</h3>
      <p>本次招生包括以下项目：</p>
      <ul>
        <li>工商管理硕士（MBA）</li>
        <li>高级工商管理硕士（EMBA）</li>
        <li>工商管理博士（DBA）</li>
      </ul>
      
      <h3>报名条件</h3>
      <p>申请人需满足以下基本条件：</p>
      <ul>
        <li>本科及以上学历</li>
        <li>具有3年以上工作经验</li>
        <li>通过入学考试</li>
      </ul>
      
      <h3>招生时间</h3>
      <p>报名时间：2024年1月15日至2024年3月15日</p>
      <p>考试时间：2024年3月20日</p>
      <p>录取通知：2024年4月10日前</p>
      
      <h3>联系方式</h3>
      <p>招生咨询电话：400-123-4567</p>
      <p>邮箱：admission@guoyan.edu.cn</p>
    `,
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <img src={icons.ChevronLeft} alt="" className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-foreground">资讯详情</h1>
        </div>
        <Button variant="ghost" size="icon">
          <img src={icons.Share2} alt="" className="w-5 h-5" />
        </Button>
      </div>

      {/* Hero Image */}
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-56 object-cover"
      />

      <div className="px-4 py-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-foreground mb-3">{news.title}</h2>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
          <span className="px-2 py-1 bg-primary/10 text-primary rounded">
            {news.category}
          </span>
          <span className="flex items-center gap-1">
            <img src={icons.Calendar} alt="" className="w-4 h-4" />
            {news.date}
          </span>
          <span className="flex items-center gap-1">
            <img src={icons.Eye} alt="" className="w-4 h-4" />
            {news.views}
          </span>
        </div>

        {/* Content */}
        <Card className="p-4 mb-4">
          <div
            className="prose prose-sm max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: news.content }}
            style={{
              lineHeight: "1.8",
            }}
          />
        </Card>

        {/* Related News */}
        <div>
          <h3 className="font-bold text-foreground mb-3">相关资讯</h3>
          <div className="space-y-3">
            {[1, 2].map((item) => (
              <Card
                key={item}
                className="p-3 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/news/${item + 1}`)}
              >
                <h4 className="font-medium text-sm text-foreground mb-2">
                  国研商学院举办企业家高峰论坛
                </h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>学院动态</span>
                  <span>·</span>
                  <span>2024-01-10</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
