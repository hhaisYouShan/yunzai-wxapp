import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import TeacherDetail from "./pages/TeacherDetail";
import NewsDetail from "./pages/NewsDetail";
import Profile from "./pages/Profile";
import Alumni from "./pages/Alumni";
import AlumniApplication from "./pages/AlumniApplication";
import AlumniRegion from "./pages/AlumniRegion";
import AlumniActivity from "./pages/AlumniActivity";
import AlumniAbout from "./pages/AlumniAbout";
import AlumniMembers from "./pages/AlumniMembers";
import AlumniActivitiesList from "./pages/AlumniActivitiesList";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import Feedback from "./pages/Feedback";
import Settings from "./pages/Settings";
import Teachers from "./pages/Teachers";
import News from "./pages/News";
import Agreement from "./pages/Agreement";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import VipCourseDetail from "./pages/VipCourseDetail";
import VipCourseRegister from "./pages/VipCourseRegister";
import ActivityParticipation from "./pages/ActivityParticipation";
import { BottomNav } from "./components/BottomNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="max-w-md mx-auto bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/alumni/about" element={<AlumniAbout />} />
          <Route path="/alumni/members" element={<AlumniMembers />} />
          <Route path="/alumni/activities" element={<AlumniActivitiesList />} />
          <Route path="/alumni/application" element={<AlumniApplication />} />
          <Route path="/alumni/:regionId" element={<AlumniRegion />} />
          <Route path="/alumni/activity/:activityId" element={<AlumniActivity />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/activity-participation" element={<ActivityParticipation />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/news" element={<News />} />
            <Route path="/vip-course/:id" element={<VipCourseDetail />} />
            <Route path="/vip-course/:id/register" element={<VipCourseRegister />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
