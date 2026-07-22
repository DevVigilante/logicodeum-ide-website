import React, { useState, useEffect } from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useLocation } from "react-router-dom";

function ErrorHtmlView(error: string): string {
  return `<p style='color:red'>${error}</p>`;
}

export default function MarkdownViewer() {
  const location = useLocation();
  const [content, setContent] = useState("");

  async function loadPage(pagePath: string) {
    try {
      let res = await fetch("/fragments".concat(pagePath));
      let html = await res.text();
      setContent(html);
    } catch {
      setContent(ErrorHtmlView("Failed to load content"));
    }
  }

  useEffect(() => {
    let markdownFilePath: string = location.pathname.replace(/^\/m/, "");

    if (markdownFilePath == "") {
      setContent(ErrorHtmlView(markdownFilePath));
    } else {
      loadPage(markdownFilePath);
    }

  }, [location]);

  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Footer />
    </>
  );
};