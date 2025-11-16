import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { X } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log('로그인:', formData);
    } else {
      console.log('회원가입:', formData);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  const switchM = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-[fadeIn_0.2s_ease-out]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={24} />
        </button>

        <div className="px-8 pt-8 pb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? '로그인' : '회원가입'}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {isLogin
              ? 'Postly에 다시 오신 것을 환영합니다'
              : 'Postly와 함께 시작하세요'}
          </p>
        </div>

        <div className="px-8 pb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BAFF3] focus:border-transparent outline-none transition"
                placeholder="example@postly.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BAFF3] focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {isLogin && (
            <div className="mt-3 text-right">
              <button
                type="button"
                className="text-sm text-[#3BAFF3] hover:underline"
              >
                비밀번호를 잊으셨나요?
              </button>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="mt-6 w-full rounded-lg bg-[#3BAFF3] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2E9FE3] transition"
          >
            {isLogin ? '로그인' : '회원가입'}
          </button>

          <div className="mt-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">또는</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}{' '}
            <button
              type="button"
              onClick={switchM}
              className="font-semibold text-[#3BAFF3] hover:underline"
            >
              {isLogin ? '회원가입' : '로그인'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}