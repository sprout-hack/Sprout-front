import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewProps {
  markdown: string;
}

export default function BlogPage({ markdown }: MarkdownPreviewProps) {
  return (
    <div className="text-[#000000] text-lg leading-7 tracking-tight break-words transition-colors duration-150 max-w-3xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 헤더ㅓ
          h1: ({ children }) => <h1 className="text-3xl font-bold mt-6 mb-3">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold mt-5 mb-2">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>,
          h5: ({ children }) => <h5 className="text-base font-semibold mt-3 mb-2">{children}</h5>,
          h6: ({ children }) => <h6 className="text-sm font-semibold mt-3 mb-2">{children}</h6>,

          // 문단
          p: ({ children }) => <p className="my-3 leading-7">{children}</p>,

          // 굵은 글씨
          strong: ({ children }) => <strong className="font-bold">{children}</strong>,

          // 취소선 (GFM)
          del: ({ children }) => <del className="text-gray-500">{children}</del>,

          // 줄바꿈
          br: () => <br />,

          // 리스트
          ul: ({ children }) => <ul className="list-disc pl-6 my-3">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 my-3">{children}</ol>,
          li: ({ children }) => <li className="my-1">{children}</li>,

          // 체크박스
          input: ({ checked }) => (
            <input type="checkbox" checked={checked} readOnly className="mr-2" />
          ),

          // 링크
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 underline hover:text-blue-800" target="_blank">
              {children}
            </a>
          ),

          // 코드 블록
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return (
              <div className="my-4">
                <SyntaxHighlighter
                  style={nord}
                  language={match ? match[1] : "text"}
                  PreTag="div"
                  customStyle={{
                    borderRadius: "0.5rem",
                    background: "#2E3440",
                    padding: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            );
          },

          // 코드블록 wrapper
          pre: ({ children }) => <pre className="my-4">{children}</pre>,

          // 인용문
          blockquote: ({ children }) => (
            <blockquote className="bg-none px-4 py-2 rounded-xl my-4 border-l-4 border-[#FAFAFA">
              {children}
            </blockquote>
          ),

          // 이미지
          img: ({ src, alt }) => (
            <img className="max-w-full rounded-lg my-4 block" src={src} alt={alt ?? ""} />
          ),

          // 테이블
          table: ({ children }) => (
            <table className="border-collapse border border-gray-400 my-4 w-full">
              {children}
            </table>
          ),
          thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr>{children}</tr>,
          th: ({ children }) => (
            <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-3 py-2 align-top">{children}</td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
