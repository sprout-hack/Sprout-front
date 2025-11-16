import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import {CodeXml,Heading1,Heading2,Heading3,Image,Italic,ListChecks,Strikethrough,Link,Bold} from 'lucide-react'

interface Props {
  onInsert: (before: string, after?: string) => void;
}

export default function MarkdownToolBar({ onInsert }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const bind = useDrag(
    ({ offset: [dx, dy] }) => setPos({ x: dx, y: dy }),
    {
      from: () => [pos.x, pos.y]
    }
  );

  return (
    <div
      {...bind()}
      className="fixed bottom-10 left-1/2 w-auto rounded-xl shadow-2xl bg-white border border-gray-200 z-[9999] px-2 py-1"
      style={{
        transform: `translate(calc(-50% + ${pos.x}px), ${pos.y}px)`,
        touchAction: 'none'
      }}
    >
      <div className="flex gap-2 items-center">
        <button 
          onClick={() => onInsert("**", "**")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 font-bold text-[10px] active:scale-95"
          title="Bold"
        >
          <Bold size={16}/>
        </button>
        <button 
          onClick={() => onInsert("_", "_")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 italic text-[10px] active:scale-95"
          title="Italic"
        >
          <Italic size={16}/>
        </button>
        <button 
          onClick={() => onInsert("~~", "~~")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 line-through text-[10px] active:scale-95"
          title="Strikethrough"
        >
          <Strikethrough size={16}/>
        </button>
        <button 
          onClick={() => onInsert("\n```js\n", "\n```\n")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 text-[10px] active:scale-95"
          title="Code Block"
        >
          <CodeXml size={16}/>
        </button>
        <button 
          onClick={() => onInsert("[", "](url)")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 text-[10px] active:scale-95"
          title="Link"
        >
          <Link size={16}/>
        </button>
        <button 
          onClick={() => onInsert("![alt text](", ")")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 text-[10px] active:scale-95"
          title="Image"
        >
          <Image size={16}/>
        </button>
        <button 
          onClick={() => onInsert("- [ ] ", "")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 text-[10px] active:scale-95"
          title="Checkbox"
        >
          <ListChecks size={16}/>
        </button>
        <button 
          onClick={() => onInsert("\n# ", "\n")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 font-bold text-[10px] active:scale-95"
          title="Heading 1"
        >
          <Heading1 size={16}/>
        </button>
        <button 
          onClick={() => onInsert("\n## ", "\n")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 font-bold text-[10px] active:scale-95"
          title="Heading 2"
        >
          <Heading2 size={16}/>
        </button>
        <button 
          onClick={() => onInsert("\n### ", "\n")} 
          className="px-1 py-1 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 font-bold text-[10px] active:scale-95"
          title="Heading 3"
        >
          <Heading3 size={16}/>
        </button>
      </div>
    </div>
  );
}