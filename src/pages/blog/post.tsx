import { useState, useRef } from "react";
import BlogPage from "./page";
import Sidebar from "../../components/sidebar/item";
import MarkdownToolbar from "../../components/markdowntoolbar/item";

export default function PostPage() {
  const [markdown, setMarkdown] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInsert = (before: string, after: string = "") => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.slice(start, end);

    const newText = text.slice(0, start) + before + selected + after + text.slice(end);
    setMarkdown(newText);

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + before.length + selected.length + after.length;
      textarea.focus();
    }, 0);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 px-2 py-8">
        <div className="flex gap-4 justify-center w-full">
          <div className="flex flex-col w-[45vw]">
            <textarea
              ref={textareaRef}
              className="h-[90vh] text-sm p-4 rounded-lg bg-[#E2E2E2] text-[#000000] border border-[#E2E2E2] resize-none focus:outline-none"
              placeholder="여기에 Markdown을 작성하세요..."
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>
          <MarkdownToolbar onInsert={handleInsert} />
          <div className="w-[45vw] h-[90vh] overflow-y-auto bg-[#F4F4F4] p-4 rounded-lg">
            <BlogPage markdown={markdown} />
          </div>
        </div>
      </div>
    </div>
  );
}