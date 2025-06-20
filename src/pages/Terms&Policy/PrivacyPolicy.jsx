import React from "react";

const PrivacyPolicy = () => {
  const lastUpdatedDate = new Date().toLocaleDateString("vi-VN");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-600 mb-2">Chính Sách Bảo Mật</h1>
          <p className="text-gray-500">Cập nhật lần cuối: {lastUpdatedDate}</p>
        </div>

        <div className="prose prose-pink max-w-none">
          {/** Section 1 */}
          <Section
            title="1. Thông Tin Chúng Tôi Thu Thập"
            items={[
              "Tên, địa chỉ, thông tin liên hệ",
              "Thông tin thanh toán (được mã hóa an toàn)",
              "Dữ liệu duyệt web và tương tác với trang web",
            ]}
            description="Chúng tôi thu thập thông tin khi bạn đăng ký tài khoản, đặt hàng hoặc tương tác với trang web, bao gồm:"
          />

          {/** Section 2 */}
          <Section
            title="2. Cách Chúng Tôi Sử Dụng Thông Tin"
            items={[
              "Xử lý đơn hàng và giao dịch",
              "Cải thiện trải nghiệm khách hàng",
              "Gửi thông tin khuyến mãi (nếu bạn đăng ký)",
              "Ngăn chặn gian lận và bảo mật tài khoản",
            ]}
            description="Thông tin của bạn được sử dụng để:"
          />

          {/** Section 3 */}
          <Section
            title="3. Chia Sẻ Thông Tin"
            items={[
              "Đối tác vận chuyển để giao hàng",
              "Nhà cung cấp dịch vụ thanh toán",
              "Khi được yêu cầu bởi pháp luật",
            ]}
            description="Chúng tôi không bán hoặc chuyển nhượng thông tin của bạn cho bên thứ ba mà không có sự đồng ý của bạn, ngoại trừ:"
          />

          {/** Section 4 */}
          <Section
            title="4. Bảo Mật Dữ Liệu"
            items={[
              "Mã hóa dữ liệu nhạy cảm",
              "Bảo vệ trang web bằng SSL",
              "Giới hạn truy cập thông tin nhân viên",
            ]}
            description="Chúng tôi thực hiện các biện pháp bảo mật bao gồm:"
          />

          {/** Section 5 */}
          <Section
            title="5. Quyền Của Bạn"
            items={[
              "Truy cập, chỉnh sửa thông tin cá nhân",
              "Yêu cầu xóa tài khoản",
              "Từ chối nhận thông tin tiếp thị",
              "Khiếu nại với cơ quan bảo vệ dữ liệu",
            ]}
            description="Bạn có quyền:"
          />

          {/** Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookie</h2>
            <p className="text-gray-600">
              Chúng tôi sử dụng cookie để cải thiện trải nghiệm duyệt web. Bạn có thể tắt cookie trong trình duyệt nhưng một số tính năng có thể không hoạt động.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              Mọi câu hỏi về chính sách bảo mật, vui lòng liên hệ{" "}
              <span className="text-pink-600">privacy@glowbeauty.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, description, items }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <ul className="list-disc pl-6 space-y-2 text-gray-600">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </section>
);

export default PrivacyPolicy;
