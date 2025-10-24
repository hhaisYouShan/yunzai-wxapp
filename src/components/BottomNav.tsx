import { useLocation, useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { 
      iconActive: "/icons/home-active.png",
      iconInactive: "/icons/home.png",
      label: "首页", 
      path: "/" 
    },
    { 
      iconActive: "/icons/discover-active.png",
      iconInactive: "/icons/discover.png",
      label: "发现", 
      path: "/discover" 
    },
    { 
      iconActive: "/icons/alumni-active.png",
      iconInactive: "/icons/alumni.png",
      label: "校友会", 
      path: "/alumni" 
    },
    { 
      iconActive: "/icons/courses-active.png",
      iconInactive: "/icons/courses.png",
      label: "上课", 
      path: "/courses" 
    },
    { 
      iconActive: "/icons/profile-active.png",
      iconInactive: "/icons/profile.png",
      label: "我的", 
      path: "/profile" 
    },
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
                src={isActive ? item.iconActive : item.iconInactive}
                alt={item.label}
                className="w-6 h-6 object-contain"
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
