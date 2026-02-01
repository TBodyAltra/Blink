import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem | undefined;
let animationTimer: ReturnType<typeof setInterval> | undefined;

const EYE_OPEN = '👁';
const EYE_CLOSED = '◡';
const LABEL = ' 记得眨眼';

function getConfig(): { enabled: boolean; animationIntervalMs: number } {
  const config = vscode.workspace.getConfiguration('blink');
  return {
    enabled: config.get<boolean>('enabled', true),
    animationIntervalMs: config.get<number>('animationIntervalMs', 800),
  };
}

function startAnimation(): void {
  stopAnimation();

  const { enabled, animationIntervalMs } = getConfig();
  if (!enabled) {
    return;
  }

  if (!statusBarItem) {
    statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Right,
      100
    );
    statusBarItem.command = 'blink.remindNow';
    statusBarItem.tooltip = '点击弹出「记得眨眼」提示';
  }

  let isOpen = true;
  const tick = (): void => {
    if (!statusBarItem) return;
    statusBarItem.text = `${isOpen ? EYE_OPEN : EYE_CLOSED}${LABEL}`;
    statusBarItem.show();
    isOpen = !isOpen;
  };

  tick();
  animationTimer = setInterval(tick, animationIntervalMs);
}

function stopAnimation(): void {
  if (animationTimer) {
    clearInterval(animationTimer);
    animationTimer = undefined;
  }
  if (statusBarItem) {
    statusBarItem.hide();
  }
}

function showBlinkReminder(): void {
  vscode.window.showInformationMessage('👁️ 记得眨眼！让眼睛休息一下～', '知道了');
}

export function activate(context: vscode.ExtensionContext): void {
  startAnimation();

  context.subscriptions.push(
    vscode.commands.registerCommand('blink.remindNow', () => {
      showBlinkReminder();
    })
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('blink')) {
        startAnimation();
      }
    })
  );
}

export function deactivate(): void {
  stopAnimation();
  if (statusBarItem) {
    statusBarItem.dispose();
    statusBarItem = undefined;
  }
}
