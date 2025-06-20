import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axiosClient from '../../api/axiosClient'; // Import axiosClient từ utils
const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const navigate = useNavigate();
  const handleVerify = async (e) => {
    e.preventDefault();
    // const res = await axiosClient.post('/api/auth/verify-otp', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, code: verificationCode }),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    if (res.ok) {
      navigate('/login'); // chuyển hướng tới trang đăng nhập
    } else {
      const data = await res.json();
      setError(data.message || 'Mã xác thực không đúng.');
    }
  };

  const handleCodeChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto focus to next input
      if (value && index < 5) {
        document.getElementById(`verification-input-${index + 1}`).focus();
      }
    }
  };

  const handleResendCode = () => {
    setIsResending(true);
    setCountdown(30);
    
    // Simulate resend code API call
    setTimeout(() => {
      setIsResending(false);
    }, 2000);

    // Start countdown
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = verificationCode.join('');
    console.log('Verification code submitted:', code);
    // Xử lý logic xác thực
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Phần hình ảnh bên trái */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="relative w-full h-64 md:h-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Mỹ phẩm cao cấp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-purple-500/20"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Vani Cosmestic</h1>
            <p className="text-sm md:text-base">Xác thực để bắt đầu trải nghiệm</p>
          </div>
        </div>
      </div>

      {/* Phần form xác thực bên phải */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header với logo */}
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">Xác thực tài khoản</h2>
            <p className="text-pink-100 mt-1">Nhập mã xác thực chúng tôi đã gửi đến email của bạn</p>
          </div>

          {/* Form xác thực */}
          <form className="p-8" onSubmit={handleVerify}>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Mã xác thực gồm 6 chữ số
              </label>
              <div className="flex justify-center space-x-3">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`verification-input-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                    maxLength="1"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={verificationCode.some(digit => digit === '')}
              className={`w-full ${
                verificationCode.some(digit => digit === '') 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
              } text-white py-3 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 mb-6`}
            >
              Xác thực
            </button>

            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Bạn không nhận được mã?</p>
              <button
                type="button"
                onClick={handleResendCode}
                disabled={isResending || countdown > 0}
                className={`font-medium ${
                  isResending || countdown > 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-pink-600 hover:text-pink-500'
                } transition-colors`}
              >
                {isResending ? 'Đang gửi lại...' : 
                 countdown > 0 ? `Gửi lại sau ${countdown}s` : 'Gửi lại mã xác thực'}
              </button>
            </div>
          </form>

          {/* Phần liên kết */}
          <div className="px-8 pb-8 text-center">
            <p className="text-sm text-gray-600">
              Bạn cần hỗ trợ?{' '}
              <Link
                to="/contact"
                className="font-medium text-pink-600 hover:text-pink-500 transition-colors"
              >
                Liên hệ chúng tôi
              </Link>
            </p>

            <div className="mt-6">
              <p className="text-xs text-gray-500">
                Bằng việc xác thực, bạn đồng ý với{' '}
                <Link to="/terms" className="underline hover:text-gray-600">
                  Điều khoản dịch vụ
                </Link>{' '}
                và{' '}
                <Link to="/privacy" className="underline hover:text-gray-600">
                  Chính sách bảo mật
                </Link>{' '}
                của chúng tôi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;