import React from "react";

const TermsOfService = () => {
  const lastUpdatedDate = new Date().toLocaleDateString("vi-VN");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-600 mb-2">Điều Khoản Dịch Vụ</h1>
          <p className="text-gray-500">Cập nhật lần cuối: {lastUpdatedDate}</p>
        </div>

        <div className="prose prose-pink max-w-none">
          <Section
            title="1. Giới Thiệu"
            paragraphs={[
              "Chào mừng bạn đến với Glow Beauty! Những điều khoản này quy định việc bạn sử dụng trang web và dịch vụ của chúng tôi.",
            ]}
          />

          <Section
            title="2. Điều Kiện Sử Dụng"
            items={[
              "Bạn phải từ 18 tuổi trở lên để sử dụng dịch vụ của chúng tôi",
              "Không được sử dụng trang web cho mục đích bất hợp pháp",
              "Chúng tôi có quyền từ chối dịch vụ với bất kỳ ai vào bất kỳ lúc nào",
            ]}
          />

          <Section
            title="3. Đơn Hàng & Thanh Toán"
            paragraphs={[
              "Chúng tôi bảo lưu quyền từ chối hoặc hủy đơn hàng của bạn trong một số trường hợp nhất định, bao gồm nhưng không giới hạn khi:",
            ]}
            items={[
              "Sản phẩm không có sẵn",
              "Lỗi trong giá cả hoặc mô tả sản phẩm",
              "Hoạt động gian lận hoặc đáng ngờ",
            ]}
          />

          <Section
            title="4. Quyền Sở Hữu Trí Tuệ"
            paragraphs={[
              "Tất cả nội dung trên trang web này, bao gồm hình ảnh, văn bản, logo là tài sản của Glow Beauty và được bảo vệ bởi luật bản quyền.",
            ]}
          />

          <Section
            title="5. Thay Đổi Điều Khoản"
            paragraphs={[
              "Chúng tôi có quyền cập nhật các điều khoản này bất cứ lúc nào. Bằng cách tiếp tục sử dụng dịch vụ sau khi có thay đổi, bạn đồng ý tuân thủ các điều khoản mới.",
            ]}
          />

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              Nếu bạn có bất kỳ câu hỏi nào về Điều khoản Dịch vụ, vui lòng liên hệ với chúng tôi tại{" "}
              <span className="text-pink-600">support@glowbeauty.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, paragraphs = [], items = [] }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {paragraphs.map((text, idx) => (
      <p key={idx} className="text-gray-600 mb-4">
        {text}
      </p>
    ))}
    {items.length > 0 && (
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
  </section>
);

export default TermsOfService;
