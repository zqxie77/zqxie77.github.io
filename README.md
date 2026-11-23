# Zequn Xie (谢泽群) · Personal Homepage

谢泽群的个人学术主页，部署在 [zqxie77.github.io](https://zqxie77.github.io/)。

版式参考 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io)：顶部导航 + 左侧个人信息栏，正文依次为 About Me、🔥 News、📝 Publications、📖 Education、🤝 Academic Service。

技术栈：Next.js（静态导出）· TypeScript · Tailwind CSS · shadcn/ui。

## 本地运行

需要 Node.js 20+。

```bash
npm install
npm run dev        # 开发模式：http://localhost:4317
```

构建并预览最终会部署的静态文件：

```bash
npm run build      # 生成 out/ 目录
npm run preview    # 在 http://localhost:4318 预览 out/
```

其他命令：`npm run lint`、`npm run typecheck`。

## 更新内容

所有内容都在 [`src/data/profile.ts`](src/data/profile.ts) 一个文件里，平时只需要改这里：

- `profile`：姓名、简介、邮箱、GitHub / Google Scholar 链接、`lastUpdated`（页脚“最后更新”日期）
- `advisors`：导师及主页链接
- `news`：新闻，最新的放最前；`text` 里用 `**加粗**`
- `publications`：论文列表（按数组顺序显示）
  - 作者名后加 `†` 表示共同一作，例如 `"Zequn Xie†"`
  - `links` 支持 `paper`、`code`、`website`、`productHunt`；有 `paper` 时标题会变成链接
  - `url` 可单独指定标题链接（例如模型发布页），优先于 `links.paper`
  - `bibtex` 填入 BibTeX 文本后，条目末尾会出现 “BibTeX” 链接，点击即复制到剪贴板（页面上不展开显示）
  - `track` 显示在会议标签里（如 `Main` → `ACL 2026 Main`）
  - `highlight` 以红字显示在标签后（如 `Spotlight`、`Oral`）
- `education`：教育经历
- `service`：Area Chair / PC Member / Reviewer
头像在 `public/avatar.jpg`，网站图标在 `src/app/icon.jpg`，替换同名文件即可。

## 部署到 GitHub Pages

仓库内置了 GitHub Actions 工作流 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)，推送到 `main` 分支后会自动构建并发布。

首次使用需要在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**（原来是 “Deploy from a branch”）。
