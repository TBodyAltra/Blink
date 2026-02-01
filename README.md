# Blink

提醒程序员记得眨眼的 VS Code 插件，帮助保护眼睛健康。

长时间盯着屏幕会减少眨眼频率，容易导致眼睛干涩、疲劳。本插件在状态栏持续显示「眨眼」动画，随时提醒你记得眨眼、放松眼睛。

## 功能

- **持续动画**：状态栏右侧持续显示 👁 / ◡ 交替的「记得眨眼」动画，不打扰、常驻可见
- **可配置**：在设置中调整动画速度或关闭提醒
- **点击状态栏**：点击状态栏提醒可弹出一次「记得眨眼」提示；命令「Blink: 立即提醒眨眼」也可触发

## 测试运行

1. 克隆本仓库并进入目录：
   ```bash
   cd Blink
   ```
2. 安装依赖并编译：
   ```bash
   npm install
   npm run compile
   ```
3. 在 VS Code 中打开本仓库文件夹（`Blink` 根目录）。
4. 按 **F5** 或菜单 **运行 → 启动调试**，会打开一个「扩展开发主机」新窗口。
5. 在新窗口右下角状态栏可见「👁 记得眨眼」与「◡ 记得眨眼」交替动画；点击可弹出提示。

## 编译成 VSIX

VSIX 是扩展的安装包，可离线安装或上传到 Marketplace。

**环境要求**：打包/发布需 **Node 20+**。若当前是 Node 12，可用 [nvm](https://github.com/nvm-sh/nvm) 安装：`nvm install 20 && nvm use 20`。

1. 在 `package.json` 中把 `publisher` 改成你的发布者 ID（例如你的 GitHub 用户名或组织名）。
2. 在项目根目录执行（无需全局安装 vsce，用 npx 即可）：
   ```bash
   npm run compile
   npx @vscode/vsce package
   ```
   或一条命令：`npm run package`（会先编译再调用 npx vsce）。
3. 完成后会在当前目录生成 `blink-0.1.0.vsix`。

**本地安装 VSIX**：VS Code → 扩展 → 右上角 **⋯** → **从 VSIX 安装…** → 选择 `blink-0.1.0.vsix`。

## 发布到 VS Code Marketplace

需 **Node 20+**（见上文「编译成 VSIX」）。

1. **注册发布者**：打开 [Visual Studio Marketplace 发布者管理](https://marketplace.visualstudio.com/manage)，用 Microsoft 账号登录，新建一个 Publisher，记下 **Publisher ID**，填到 `package.json` 的 `publisher`。
2. **登录 vsce**（无需全局安装，用 npx）：
   ```bash
   npx @vscode/vsce login <你的-publisher-id>
   ```
   按提示用 Personal Access Token 登录（在 [Azure DevOps](https://dev.azure.com) 创建）。
3. **发布**：
   ```bash
   npx @vscode/vsce publish
   ```
   首次发布会按 `package.json` 的 `version` 发布；之后更新需先改 `version` 再执行上述命令。
4. 发布成功后，用户可在 VS Code 扩展里搜索「Blink」安装。

**仅打包不发布**：只生成 VSIX 用 `npm run package` 或 `npx @vscode/vsce package`，不要执行 `vsce publish`。

## 配置

| 设置 | 说明 | 默认值 |
|------|------|--------|
| `blink.enabled` | 是否启用状态栏眨眼动画 | true |
| `blink.animationIntervalMs` | 眨眼切换间隔（毫秒），越小动画越快 | 800 |

在 VS Code 设置中搜索「Blink」即可修改。

## 开发

```bash
npm install
npm run compile   # 编译
npm run watch    # 监听编译
```

## License

MIT
