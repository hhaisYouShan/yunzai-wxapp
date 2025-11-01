import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import icons from "@/lib/icons";

const Agreement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <img src={icons.ChevronLeft} alt="" className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-foreground">用户协议</h1>
      </div>

      <div className="p-4">
        <Card className="p-6 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">国研在线用户协议</h2>
            <p className="text-sm text-muted-foreground mb-2">更新日期：2025年1月18日</p>
            <p className="text-sm text-muted-foreground">生效日期：2025年1月18日</p>
          </div>

          <div className="space-y-4">
            <section>
              <h3 className="font-bold text-foreground mb-2">1. 协议的接受</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                欢迎使用国研在线平台。在使用本平台服务前，请您仔细阅读并充分理解本协议的全部内容。您点击"同意"按钮或实际使用本平台服务，即表示您已阅读、理解并同意接受本协议的约束。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">2. 账号注册与使用</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                2.1 您在注册账号时，应提供真实、准确、完整的个人信息。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                2.2 您应妥善保管账号和密码，不得将账号出借、转让或以其他方式提供给第三方使用。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                2.3 如发现账号被盗用，应立即通知平台客服。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">3. 服务内容</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                3.1 国研在线提供在线教育课程、学习资料、师资服务等内容。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                3.2 平台有权根据实际情况调整服务内容，包括但不限于课程安排、师资配置等。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                3.3 用户购买的课程在有效期内可多次观看学习。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">4. 用户行为规范</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                4.1 不得利用本平台从事违法违规活动。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                4.2 不得复制、传播、销售平台提供的课程内容。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                4.3 不得发布虚假信息或恶意评价。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                4.4 尊重其他用户和讲师，维护良好的学习环境。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">5. 知识产权</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                5.1 平台提供的所有内容（包括但不限于文字、图片、视频、音频等）的知识产权归平台或相关权利人所有。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                5.2 未经授权，用户不得擅自使用、复制、修改、传播平台内容。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">6. 隐私保护</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                我们重视用户隐私保护，具体内容请参阅《隐私政策》。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">7. 免责声明</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                7.1 平台不对因网络故障、系统维护等不可抗力因素导致的服务中断承担责任。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                7.2 用户因使用平台服务产生的任何纠纷，应通过协商或法律途径解决。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">8. 协议的修改</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                平台有权根据需要修改本协议，修改后的协议将在平台公布，并在公布后立即生效。如您继续使用平台服务，即视为接受修改后的协议。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">9. 联系方式</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                如有任何疑问或建议，请通过以下方式联系我们：
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                客服电话：400-885-1955
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                公司名称：深圳市国研时代教育科技有限公司
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Agreement;
