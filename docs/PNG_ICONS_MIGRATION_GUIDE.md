# PNG图标迁移指南

## 概述
为了支持微信小程序，项目已将所有Lucide React SVG图标替换为PNG图标。

## 图标位置
- **PNG图标文件**: `src/assets/icons/*.png`
- **统一导出文件**: `src/lib/icons.ts`

## 如何使用

### 1. 导入图标
```tsx
// 旧方式 (lucide-react)
import { Home, User, Calendar } from "lucide-react";

// 新方式 (PNG图标)
import icons from "@/lib/icons";
```

### 2. 使用图标

#### 旧方式 (SVG组件)
```tsx
<Home className="w-6 h-6 text-primary" />
<User className="w-4 h-4" />
```

#### 新方式 (PNG图片)
```tsx
<img src={icons.Home} alt="" className="w-6 h-6" />
<img src={icons.User} alt="" className="w-4 h-4" />
```

### 3. 动态使用图标

#### 旧方式
```tsx
const Icon = item.icon;
<Icon className="w-6 h-6" />
```

#### 新方式
```tsx
const iconSrc = item.icon; // 现在是PNG路径
<img src={iconSrc} alt="" className="w-6 h-6" />
```

## 可用图标列表

### 导航和箭头
- `ArrowLeft`, `ArrowRight`
- `ChevronLeft`, `ChevronRight`, `ChevronDown`, `ChevronUp`

### 基础图标
- `Home`, `User`, `Users`, `Compass`
- `Search`, `Bell`, `Settings`

### 操作图标
- `Check`, `X`, `Upload`
- `Heart`, `Star`, `Eye`, `Share`, `Share2`

### 时间和日期
- `Calendar`, `Clock`

### 位置
- `MapPin`

### 媒体
- `Video`, `Play`, `PlayCircle`

### 通讯
- `Phone`, `Mail`
- `MessageCircle`, `MessageSquare`

### 商业
- `Briefcase`, `Building`, `Building2`
- `ShoppingBag`, `Package`

### 教育
- `GraduationCap`, `BookOpen`, `School`

### 奖励
- `Award`, `TrendingUp`, `ThumbsUp`

### 其他
- `Circle`, `Dot`, `QrCode`
- `Ticket`, `MoreHorizontal`
- `GripVertical`, `PanelLeft`

## 批量替换步骤

### 第一步：替换导入语句
找到文件开头的导入：
```tsx
import { ChevronLeft, Calendar, MapPin } from "lucide-react";
```

替换为：
```tsx
import icons from "@/lib/icons";
```

### 第二步：替换使用方式

查找所有类似以下的代码：
```tsx
<ChevronLeft className="w-4 h-4" />
<Calendar className="w-5 h-5 text-primary" />
```

替换为：
```tsx
<img src={icons.ChevronLeft} alt="" className="w-4 h-4" />
<img src={icons.Calendar} alt="" className="w-5 h-5" />
```

**注意**: 移除颜色相关的className（如`text-primary`），因为PNG图标是黑色的，颜色通过filter或opacity控制。

### 第三步：处理条件渲染
```tsx
// 旧方式
{course.type === "video" ? <Video className="w-3 h-3" /> : <PlayCircle className="w-3 h-3" />}

// 新方式
<img src={course.type === "video" ? icons.Video : icons.PlayCircle} alt="" className="w-3 h-3" />
```

## 已完成迁移的文件

✅ `src/pages/Alumni.tsx`
✅ `src/components/BottomNav.tsx`
✅ `src/components/TeacherCard.tsx`
✅ `src/components/CourseCard.tsx`
✅ `src/components/NewsCard.tsx`

## 待迁移文件列表

需要迁移的组件和页面文件（共50+个）：

### 校友会相关
- `src/components/alumni/ActivitiesList.tsx`
- `src/components/alumni/AlumniShowcase.tsx`
- `src/components/alumni/FeaturedActivityCard.tsx`
- `src/pages/AlumniAbout.tsx`
- `src/pages/AlumniActivitiesList.tsx`
- `src/pages/AlumniActivity.tsx`
- `src/pages/AlumniApplication.tsx`
- `src/pages/AlumniMembers.tsx`
- `src/pages/AlumniRegion.tsx`
- `src/pages/ActivityParticipation.tsx`

### 课程相关
- `src/pages/Courses.tsx`
- `src/pages/CourseDetail.tsx`
- `src/pages/HotCourses.tsx`
- `src/pages/LiveSchedule.tsx`
- `src/pages/Teachers.tsx`
- `src/pages/TeacherDetail.tsx`
- `src/pages/VipCourseDetail.tsx`
- `src/pages/VipCourseRegister.tsx`
- `src/pages/TrainingPrograms.tsx`

### 用户相关
- `src/pages/Profile.tsx`
- `src/pages/Auth.tsx`
- `src/pages/Settings.tsx`
- `src/pages/Orders.tsx`
- `src/pages/Favorites.tsx`

### 新闻和发现
- `src/pages/News.tsx`
- `src/pages/NewsDetail.tsx`
- `src/pages/Discover.tsx`
- `src/pages/Home.tsx`

### 其他页面
- `src/pages/School.tsx`
- `src/pages/Feedback.tsx`
- `src/pages/Agreement.tsx`
- `src/pages/Privacy.tsx`

### UI组件 (可选迁移，shadcn组件)
- `src/components/ui/accordion.tsx`
- `src/components/ui/breadcrumb.tsx`
- `src/components/ui/calendar.tsx`
- `src/components/ui/carousel.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/command.tsx`
- `src/components/ui/context-menu.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/dropdown-menu.tsx`
- 等等...

## 注意事项

1. **颜色控制**: PNG图标是黑色的，无法通过`text-primary`等类控制颜色。如需颜色变化，使用`opacity`或`filter`。

2. **响应式**: 确保图标大小适配不同设备，使用Tailwind的响应式类。

3. **可访问性**: 虽然使用空alt，但在重要交互处添加aria-label：
```tsx
<button aria-label="返回">
  <img src={icons.ArrowLeft} alt="" className="w-6 h-6" />
</button>
```

4. **性能**: PNG图标会被Vite打包和优化，确保使用ES6 import方式导入。

## 快速替换脚本

如果需要批量替换，可以使用以下正则表达式：

### 查找
```regex
import \{ ([^}]+) \} from "lucide-react";
```

### 替换为
```
import icons from "@/lib/icons";
```

然后逐个替换图标使用：
```regex
<([A-Z]\w+) className="([^"]*)" />
```

替换为：
```
<img src={icons.$1} alt="" className="$2" />
```

**注意**: 这个正则替换可能需要手动调整，建议逐文件检查。

## 如何添加新图标

如果需要添加新的PNG图标：

1. 将PNG图标放到 `src/assets/icons/` 目录
2. 在 `src/lib/icons.ts` 中导入和导出：
```tsx
import newIcon from "@/assets/icons/new-icon.png";

export const icons = {
  // ... 其他图标
  NewIcon: newIcon,
};
```

3. 在组件中使用：
```tsx
<img src={icons.NewIcon} alt="" className="w-6 h-6" />
```
