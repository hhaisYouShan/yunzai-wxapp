import { useLocation, useNavigate } from "react-router-dom";
import { Home, Compass, BookOpen, User, Users } from "lucide-react";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { icon: Home, label: "首页", path: "/" },
    { icon: Compass, label: "发现", path: "/discover" },
    { icon: Users, label: "校友会", path: "/alumni" },
    { icon: BookOpen, label: "上课", path: "/courses" },
    { icon: User, label: "我的", path: "/profile" },
  ];

  // 检查当前路径是否匹配导航项
  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = isActivePath(item.path);
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center flex-1 h-full"
            >
              <item.icon 
                className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`}
              />
              <span className={`text-xs mt-1 ${isActive ? "text-primary font-medium" : "text-muted-foreground"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
