# Blink

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![VS Code Marketplace](https://img.shields.io/static/v1?label=VS%20Code&message=Blink&color=007acc&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=xukang.blink)

提醒程序员记得眨眼的 VS Code 扩展，在状态栏持续显示温和的「眨眼」动画，帮助养成眨眼习惯、保护眼睛健康。

长时间盯屏会减少眨眼频率，容易导致眼睛干涩、疲劳。Blink 在状态栏右侧常驻 👁 / ◡ 交替动画，不打扰、常驻可见。

---

## 安装

### 从 VS Code 扩展市场安装（推荐）

1. 打开 VS Code，按 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>（Mac: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>）打开扩展视图。
2. 搜索 **Blink**，点击 **安装**。

或从命令行安装：

```bash
code --install-extension xukang.blink
```

### 从预编译 VSIX 安装（离线 / 指定版本）

预编译的 `.vsix` 随版本发布在 [GitHub Releases](https://github.com/TBodyAltra/Blink/releases)。

1. 打开 [Releases](https://github.com/TBodyAltra/Blink/releases)，选择需要的版本。
2. 下载该版本下的 **blink-x.x.x.vsix** 附件。
3. 在 VS Code 中：**扩展** → 右上角 **⋯** → **从 VSIX 安装…** → 选择下载的 `.vsix` 文件。

或命令行安装：

```bash
code --install-extension /path/to/blink-x.x.x.vsix
```

---

## 功能

- **持续动画**：状态栏右侧显示 👁 / ◡ 交替的「记得眨眼」动画，不打扰、常驻可见。
- **可配置**：在设置中调整动画速度或关闭提醒。
- **点击状态栏**：点击状态栏项可弹出一次「记得眨眼」提示；命令 **Blink: 立即提醒眨眼** 也可触发。

---

## 配置

| 设置 | 说明 | 默认值 |
|------|------|--------|
| `blink.enabled` | 是否启用状态栏眨眼动画 | `true` |
| `blink.animationIntervalMs` | 眨眼切换间隔（毫秒），越小动画越快 | `800` |

在 VS Code 中打开 **设置**，搜索 **Blink** 即可修改。

---

## 开发与打包

### 环境要求

- [Node.js](https://nodejs.org/) 18+（打包 VSIX 建议 20+）
- [VS Code](https://code.visualstudio.com/) 1.74+

### 本地运行

```bash
git clone https://github.com/TBodyAltra/Blink.git
cd Blink
npm install
npm run compile
```

在 VS Code 中打开 `Blink` 根目录，按 **F5** 启动「扩展开发主机」进行调试。

### 打包 VSIX（用于发布或离线安装）

需 **Node 20+**（可用 [nvm](https://github.com/nvm-sh/nvm)：`nvm install 20 && nvm use 20`）。

```bash
npm run package
```

会在项目根目录生成 `blink-<version>.vsix`。

### 上传 VSIX 到 GitHub Releases

1. 在项目根目录执行 `npm run package`，得到 `blink-x.x.x.vsix`。
2. 打开 [GitHub Releases](https://github.com/TBodyAltra/Blink/releases) → **Draft a new release**。
3. **Choose a tag**：新建标签，例如 `v0.1.0`（建议与 `package.json` 的 `version` 一致）。
4. **Release title**：例如 `v0.1.0` 或简短说明。
5. **Describe this release**：填写本版本更新说明。
6. 将 **blink-x.x.x.vsix** 拖入 **Attach binaries** 区域上传。
7. 点击 **Publish release**。

之后用户即可在 [Releases](https://github.com/TBodyAltra/Blink/releases) 页面下载该版本的 VSIX 进行安装。

### 发布到 VS Code Marketplace

1. 在 [Marketplace 发布者管理](https://marketplace.visualstudio.com/manage) 用 Microsoft 账号登录，创建 Publisher（若尚未创建）。
2. 将 `package.json` 中的 `publisher` 设为你的 Publisher ID。
3. 登录并发布：

   ```bash
   npx @vscode/vsce login <你的-publisher-id>
   npx @vscode/vsce publish
   ```

更新版本时，先修改 `package.json` 的 `version`，再执行 `npm run package` 和 `npx @vscode/vsce publish`，并可选将新 VSIX 上传到 GitHub Releases。

---

## 许可证

[MIT](LICENSE)
