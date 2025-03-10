import crypto from "crypto";
import fs from "fs";

const post_dir = "content/contents";
const path = `${post_dir}/${crypto.randomUUID()}.md`;

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
console.log(`Created new content: ${path}`);
