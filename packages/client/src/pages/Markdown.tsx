import { useEffect, useState } from "react";
import markdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

// Tip1: markdownIt and sanitizeHtml are large libraries, consider using smaller alternatives
// Tip2: use lazy components, so the large library is only loaded when needed

const Markdown = () => {
  const md = markdownIt();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/markdown")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMarkdown(data);
      });
  }, []);

  const htmlText = md.render(markdown);
  const result = sanitizeHtml(htmlText);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
};

export default Markdown;
