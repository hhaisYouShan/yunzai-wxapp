import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Package } from "lucide-react";

const Orders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const orders = [
    {
      id: "202501001",
      title: "金融科技与投资管理",
      teacher: "王教授",
      price: 3980,
      status: "completed",
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    },
    {
      id: "202501002",
      title: "企业战略与创新管理",
      teacher: "李教授",
      price: 4980,
      status: "learning",
      date: "2025-01-10",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    },
  ];

  const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
      completed: "已完成",
      learning: "学习中",
      pending: "待付款",
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colorMap: Record<string, string> = {
      completed: "text-muted-foreground",
      learning: "text-primary",
      pending: "text-destructive",
    };
    return colorMap[status] || "";
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="font-bold text-foreground">购买记录</h1>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full grid grid-cols-3 mb-4">
            <TabsTrigger value="all">全部</TabsTrigger>
            <TabsTrigger value="learning">学习中</TabsTrigger>
            <TabsTrigger value="completed">已完成</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 mt-0">
            {orders.map((order) => (
              <Card key={order.id} className="p-4">
                <div className="flex gap-3">
                  <img
                    src={order.image}
                    alt={order.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground line-clamp-2 mb-1">
                      {order.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{order.teacher}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">¥{order.price}</span>
                      <span className={`text-sm ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    订单编号：{order.id}
                  </span>
                  <span className="text-xs text-muted-foreground">{order.date}</span>
                </div>
                {order.status === "learning" && (
                  <Button className="w-full mt-3" size="sm">
                    继续学习
                  </Button>
                )}
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="learning" className="space-y-3 mt-0">
            {orders
              .filter((order) => order.status === "learning")
              .map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="flex gap-3">
                    <img
                      src={order.image}
                      alt={order.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground line-clamp-2 mb-1">
                        {order.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{order.teacher}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">¥{order.price}</span>
                        <span className={`text-sm ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-3" size="sm">
                    继续学习
                  </Button>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-3 mt-0">
            {orders
              .filter((order) => order.status === "completed")
              .map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="flex gap-3">
                    <img
                      src={order.image}
                      alt={order.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground line-clamp-2 mb-1">
                        {order.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{order.teacher}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">¥{order.price}</span>
                        <span className={`text-sm ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>
        </Tabs>

        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">暂无购买记录</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
