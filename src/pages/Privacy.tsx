import { useNavigate } from "react-router-dom";
import icons from "@/lib/icons";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <img src={icons.ChevronLeft} alt="" className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-foreground">隐私政策</h1>
      </div>

      <div className="p-4">
        <Card className="p-6 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">国研在线隐私政策</h2>
            <p className="text-sm text-muted-foreground mb-2">更新日期：2025年1月18日</p>
            <p className="text-sm text-muted-foreground">生效日期：2025年1月18日</p>
          </div>

          <div className="space-y-4">
            <section>
              <h3 className="font-bold text-foreground mb-2">引言</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                深圳市国研时代教育科技有限公司（以下简称"我们"）非常重视用户的隐私保护。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">1. 我们收集的信息</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                1.1 账号信息：包括手机号、姓名、邮箱等注册信息。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                1.2 使用信息：包括学习记录、浏览历史、课程评价等。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                1.3 设备信息：包括设备型号、操作系统、IP地址等。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                1.4 支付信息：包括订单号、支付金额等（敏感支付信息由第三方支付平台处理）。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">2. 信息的使用</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                2.1 提供和改进服务：用于账号管理、课程推荐、学习进度跟踪等。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                2.2 客户服务：响应用户咨询、处理投诉建议。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                2.3 安全保障：检测和防范欺诈、滥用等行为。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                2.4 营销推广：在获得您同意的情况下，向您发送课程推荐、优惠信息等。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">3. 信息的共享</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                3.1 我们不会向第三方出售您的个人信息。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                3.2 在以下情况下，我们可能会共享您的信息：
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed ml-4 mb-2">
                • 获得您的明确同意
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed ml-4 mb-2">
                • 与授权合作伙伴（如支付服务商）共享必要信息
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed ml-4">
                • 法律法规要求或政府部门要求
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">4. 信息的存储</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                4.1 您的信息将存储在中华人民共和国境内的服务器上。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                4.2 我们将采取合理的安全措施保护您的信息安全。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                4.3 在您注销账号或达到法律规定的最长保存期限后，我们将删除或匿名化处理您的信息。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">5. 您的权利</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                5.1 访问权：您有权查看我们持有的关于您的个人信息。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                5.2 更正权：如发现信息有误，您可以要求更正。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                5.3 删除权：在特定情况下，您可以要求删除您的个人信息。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                5.4 撤回同意：您可以随时撤回对信息处理的同意。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">6. Cookie和类似技术</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                我们使用Cookie等技术来改善用户体验、分析服务使用情况。您可以通过浏览器设置管理Cookie。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">7. 未成年人保护</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                我们不会主动收集未满18周岁未成年人的个人信息。如发现在未获得监护人同意的情况下收集了未成年人信息，我们会尽快删除。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">8. 政策更新</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                我们可能会不时更新本隐私政策。更新后的政策将在平台公布，重大变更会以显著方式通知您。
              </p>
            </section>

            <section>
              <h3 className="font-bold text-foreground mb-2">9. 联系我们</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                如对本隐私政策有任何疑问、意见或建议，请通过以下方式联系我们：
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

export default Privacy;
