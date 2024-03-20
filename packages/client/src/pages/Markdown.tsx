import { useEffect, useState } from "react";
import markdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

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
