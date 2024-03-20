import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const MarkdownPage = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/markdown")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMarkdown(data);
      });
  }, []);

  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default MarkdownPage;
