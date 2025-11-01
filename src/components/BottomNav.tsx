import { useLocation, useNavigate } from "react-router-dom";
import icons from "@/lib/icons";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { icon: icons.Home, label: "首页", path: "/" },
    { icon: icons.Compass, label: "发现", path: "/discover" },
    { icon: icons.Users, label: "校友会", path: "/alumni" },
    { icon: icons.BookOpen, label: "上课", path: "/courses" },
    { icon: icons.User, label: "我的", path: "/profile" },
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
              <img 
                src={item.icon}
                alt={item.label}
                className={`w-6 h-6 ${isActive ? "opacity-100" : "opacity-60"}`}
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
