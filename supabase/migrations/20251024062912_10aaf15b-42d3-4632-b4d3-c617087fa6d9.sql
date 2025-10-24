-- 创建活动状态枚举
CREATE TYPE activity_status AS ENUM ('pending', 'checked_in', 'completed');

-- 创建线下活动表
CREATE TABLE public.offline_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  activity_date TIMESTAMP WITH TIME ZONE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  max_participants INTEGER,
  image_url TEXT,
  qr_code_secret TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'upcoming',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建活动参与记录表
CREATE TABLE public.activity_participations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id UUID REFERENCES public.offline_activities(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status activity_status NOT NULL DEFAULT 'pending',
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  checked_in_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(activity_id, user_id)
);

-- 启用 RLS
ALTER TABLE public.offline_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_participations ENABLE ROW LEVEL SECURITY;

-- 活动表策略：所有人可以查看
CREATE POLICY "Anyone can view activities"
  ON public.offline_activities
  FOR SELECT
  USING (true);

-- 参与记录策略：用户可以查看自己的参与记录
CREATE POLICY "Users can view their own participations"
  ON public.activity_participations
  FOR SELECT
  USING (auth.uid() = user_id);

-- 参与记录策略：用户可以注册活动
CREATE POLICY "Users can register for activities"
  ON public.activity_participations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 参与记录策略：用户可以更新自己的签到状态
CREATE POLICY "Users can update their participation status"
  ON public.activity_participations
  FOR UPDATE
  USING (auth.uid() = user_id);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_offline_activities_updated_at
  BEFORE UPDATE ON public.offline_activities
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 创建索引
CREATE INDEX idx_activity_participations_user_id ON public.activity_participations(user_id);
CREATE INDEX idx_activity_participations_activity_id ON public.activity_participations(activity_id);
CREATE INDEX idx_activity_participations_status ON public.activity_participations(status);
CREATE INDEX idx_offline_activities_date ON public.offline_activities(activity_date);