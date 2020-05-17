import * as vscode from "vscode";

export default function getSelector() {
  const selector: vscode.DocumentFilter[] = [];
  for (const language of [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ]) {
    selector.push({ language, scheme: "file" });
    selector.push({ language, scheme: "untitled" });
  }
  return selector;
}
