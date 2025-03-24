import crypto from "crypto";
import fs from "fs";

const post_dir = "content/contents";
const slug = crypto.randomUUID();
const path = `${post_dir}/${slug}.md`;

const template = `---
title: "Title here"
description: "Desc here"
draft: true
date: ${new Date()
  .toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .replaceAll("/", "-")}
tags:
  - Tag1
  - Tag2
---
`;

fs.writeFileSync(path, template);

fs.mkdirSync(`public/contents/${slug}`);
fs.copyFileSync("public/ogp.png", `public/contents/${slug}/ogp.png`);

console.log(`Created new content: ${path}`);
