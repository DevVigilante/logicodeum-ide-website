import { readdir } from "fs/promises";
import fs from "fs";
import matter from "gray-matter"; // for properties

import { FileSystemNode, FileNode, FolderNode } from "./FileSystem.js";

import { compile, run } from "@mdx-js/mdx";
import { renderToStaticMarkup } from "react-dom/server";
import * as runtime from "react/jsx-runtime";
// const [input, output] = process.argv.slice(2);
async function readDirectories(dir: string): Promise<FileSystemNode[]> {
  const children: FileSystemNode[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = `${dir}/${entry.name}`;

    if (entry.isDirectory()) {
      const folder: FolderNode = {
        type: "folder",
        name: entry.name,
        path: fullPath,
        children: await readDirectories(fullPath),
      };

      children.push(folder);
    } else {

      const file: FileNode = {
        type: "file",
        name: entry.name,
        path: fullPath,
      };
      await compileToHtml(file);
      children.push(file);
    }
  }

  return children;
}

async function compileToHtml(file: FileNode) {
  const path: string = file.path;
  const source: string = await fs.readFileSync(path, "utf-8");
  const { content } = matter(source);
  const compiled = await compile(content, {
    outputFormat: "function-body",
  });
  const { default: MDXContent } = await run(compiled, runtime);
  const htmlContent = renderToStaticMarkup(MDXContent({}));

  const outputFolder : string = "./public/markdown".concat(path.replace("./markdown", "").slice(0, -file.name.length));
  const outputFile : string = "./public/markdown".concat(path.replace("./markdown", "").replace(".md", ".html"));
  
  await fs.mkdirSync(outputFolder, { recursive: true });
  await fs.writeFileSync(outputFile, htmlContent);
}

readDirectories("./markdown")
  .then((value) => {
    const conf = JSON.stringify(value, null, 2);
    fs.mkdirSync("./public/markdown", { recursive: true });
    fs.writeFileSync("./public/markdown/config.json", conf);
  })
  .catch((reason) => {
    console.error(reason);
  });