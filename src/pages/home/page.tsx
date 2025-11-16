import { useState } from "react";
import Sidebar from "../../components/sidebar/item";
import MockupImg from "../../assets/img/MacBook Air (2022).svg";
import AuthModal from "../../components/auth/modal/item";

export default function HomePage() {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex min-h-screen place-items-center">
      <Sidebar />
      <section className="w-full bg-gradient-to-r from-white to-slate-50 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 md:flex-row md:justify-between p-6">
          <div className="max-w-xl text-left md:pr-10">
            <h1 className="text-4xl font-bold leading-snug md:text-5xl">
              이제 블로그에서
              <br />
              바로 <span className="text-[#3BAFF3]">AI를</span> 사용해보세요
            </h1>

            <p className="mt-4 text-gray-500 text-sm md:text-base">
              외부 서비스를 오가며 작업할 필요 없습니다.
              <br />
              저희 Postly에서 AI를 바로 사용해보세요
            </p>

            <button
              onClick={() => setModal(true)}
              className="mt-8 rounded-md bg-[#3BAFF3] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2E9FE3] transition"
            >
              무료로 시작하기
            </button>
          </div>
          
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={MockupImg}
              alt="Laptop Preview"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {modal && (
        <AuthModal
          isOpen={modal}
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
}