import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { Sparkles } from "lucide-react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Dot.css";

interface Props{
    modal2: boolean;
    setModal2: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AIPostingBar() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const bind = useDrag(({ offset: [dx, dy] }) => setPos({ x: dx, y: dy }));

  return (
    <div
      className={`
        fixed bottom-10 left-1/2 flex items-center justify-between px-4 
        w-[449px] h-[45px] rounded-[28px]
        bg-gradient-to-r from-[rgba(160,160,160,0.85)] to-[rgba(180,180,180,0.85)]
        shadow-[0_4px_14px_rgba(0,0,0,0.15)]
        backdrop-blur-sm select-none z-[9999]
      `}
      style={{
        transform: `translate(calc(-50% + ${pos.x}px), ${pos.y}px)`,
      }}
    >
      <div className="flex items-center gap-3">
        <div {...bind()} className="dot-menu cursor-grab"></div>
        <div className="w-px h-6 bg-white/30"></div>

        <button
          onClick={() => setModal((e) => !e)}
          className="p-1 bg-transparent border-none outline-none cursor-pointer flex items-center justify-center"
        >
          <Sparkles size={20} color="#FFFFFF" />
        </button>
      </div>
      <div className="w-px h-6 bg-white/30 ml-64"></div>
      <button
        className={`
          bg-[#557AFF] text-white font-semibold text-sm
          rounded-[10px] px-2 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.2)]
          cursor-pointer w-[79px] h-[33.75px]
        `}
      >
        포스팅 <span>⌃</span>
      </button>
      {modal && (
        <Modal modal2={modal2} setModal2={setModal2} />
      )}
    </div>
  );
}

function Modal({ modal2, setModal2 }: Props) {
  return (
    <div>
        <div
      className={`
        fixed bottom-[170px] left-1/2 -translate-x-1/2 
        w-[449px] h-[170px] bg-[#000000]/20 rounded-[12px] p-4
        z-[10000] backdrop-blur-sm
      `}
    >
    </div>
    <div
      className="
        fixed bottom-[70px] left-1/2 -translate-x-1/2 
        w-[449px] bg-[#000000]/20 rounded-[12px] p-4
        z-[10000] backdrop-blur-sm
      "
    >
    <div className="bottom-0">
      <div className="flex flex-col items-end mb-2">
        <p className="m-0 font-medium text-[#FAFAFA] text-xs">일일 사용량</p>
        <div className="flex items-center gap-2">
          <ProgressBar
            completed={70}
            maxCompleted={100}
            height="6px"
            width="120px"
            borderRadius="50px"
            isLabelVisible={false}
            baseBgColor="rgba(217,217,217,0.3)"
            bgColor="#6093FF"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={() => setModal2((e) => !e)}
          className="
            bg-[#000000]/10 text-[#FAFAFA] font-semibold text-sm
            px-4 rounded-lg whitespace-nowrap h-[28px]
          "
        >
          주제 구체화
        </button>

        <div
          className="
            flex-1 h-[28px] bg-[#000000]/10 border border-none
            flex items-center px-3 rounded-lg
          "
        >
          <input
            type="text"
            name="prompt"
            maxLength={100}
            className="
              w-full text-sm text-white bg-transparent 
              focus:outline-none placeholder:text-[#D4D4D4]
              placeholder:text-sm placeholder:font-light
            "
            placeholder="최근 AI의 발전에 관해서 주제 구체화 해줘"
          />
        </div>
      </div>
      {modal2 && <SubjectModal />}
      </div>
    </div>
    </div>
  );
}
function SubjectModal() {
    return (
      <div className="relative w-full flex justify-center">
        <div
          className="
            absolute -left-36 translate-x-[-80px]
            w-[192px] bg-[#000000]/20 rounded-lg 
            py-2 px-1 flex flex-col place-items-center gap-2 bottom-0 
          "
        >
          <div className="bg-[#000000]/10 rounded-md w-[178px] h-[51px] p-2 flex flex-col justify-center items-start">
            <h4 className="font-semibold text-[11px] text-[#FAFAFA]">자료 검색 / 검증</h4>
            <p className="text-[10px] text-[#D4D4D4]">
              작성중인 글에 논리 오류가 없는지<br />확인합니다.
            </p>
          </div>
  
          <div className="bg-[#000000]/10 rounded-md w-[178px] h-[51px] p-2 flex flex-col justify-center items-start">
            <h4 className="font-semibold text-[11px] text-[#FAFAFA]">글 정리 / 포맷팅</h4>
            <p className="text-[10px] text-[#D4D4D4]">
              평소 작성 스타일을 반영해서 글을 정리<br />하거나 형식에 맞게 다듬습니다.
            </p>
          </div>
  
          <div className="bg-[#000000]/10 rounded-md w-[178px] h-[51px] p-2 flex flex-col justify-center items-start">
            <h4 className="font-semibold text-[11px] text-[#FAFAFA]">주제 구체화</h4>
            <p className="text-[10px] text-[#D4D4D4]">
              작성중인 글을 파악해 세부 항목을 <br />추가 합니다.
            </p>
          </div>
        </div>
      </div>
    );
  }