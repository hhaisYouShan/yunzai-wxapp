import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChevronRight, ShoppingBag, Star, Ticket, Phone, MessageSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const menuItems = [
    { icon: ShoppingBag, label: "购买记录", path: "/orders" },
    { icon: Star, label: "收藏记录", path: "/favorites" },
  ];

  const actionItems = [
    { icon: Phone, label: "电话咨询", value: "400-885-1955", path: "/tel:400-885-1955" },
    { icon: MessageSquare, label: "问题反馈", path: "/feedback" },
    { icon: Settings, label: "设置", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-4 pt-8 pb-12">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-primary-foreground">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" />
            <AvatarFallback>小山哥</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">小山哥</h2>
            <p className="text-sm opacity-90">欢迎来到国研在线</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 -mt-6 mb-4">
        <div className="grid grid-cols-2 gap-3">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Coupon Card */}
      <div className="px-4 mb-4">
        <Card className="p-4 bg-gradient-to-r from-accent/20 to-secondary/20 border-accent/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Ticket className="w-6 h-6 text-accent" />
              <span className="font-medium text-foreground">券码兑换</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </Card>
      </div>

      {/* Menu List */}
      <Card className="mx-4">
        {actionItems.map((item, index) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
              index !== actionItems.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.value && (
                <span className="text-sm text-muted-foreground">{item.value}</span>
              )}
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </Card>

      {/* Footer */}
      <div className="text-center mt-8 px-4 text-xs text-muted-foreground space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Link to="/agreement" className="text-primary">《用户协议》</Link>
          <span>和</span>
          <Link to="/privacy" className="text-primary">《隐私政策》</Link>
        </div>
        <p>@Copyright2024</p>
        <p>深圳市国研时代教育科技有限公司.All rights reserved.</p>
      </div>
    </div>
  );
};

export default Profile;
