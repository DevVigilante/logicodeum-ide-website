import React, { useState, useEffect } from "react";
import Header from "../../components/Header.jsx"
import Footer from "../../components/Footer.jsx"
import { useLocation } from "react-router-dom";

function ErrorHtmlView(error: string): string {
  return `<p style='color:red'>${error}</p>`;
}

export default function MarkdownViewer() {
  const location = useLocation();
  const [content, setContent] = useState("");

  async function loadPage(pagePath: string) {
    try {
      const res = await fetch("/markdown".concat(pagePath));
      const html = await res.text();
      setContent(html);
    } catch {
      setContent(ErrorHtmlView("Failed to load content"));
    }
  }

  useEffect(() => {
    const markdownFilePath: string = location.pathname.replace(/^\/m/, "");

    if (markdownFilePath == "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setContent(ErrorHtmlView(markdownFilePath));
    } else {
      loadPage(markdownFilePath);
    }

  }, [location]);

  return (
    <>
      <Header />
      <div style={{
        paddingLeft: "1em",
        paddingRight: "1em"
      }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Footer />
    </>
  );
};