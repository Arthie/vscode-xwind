import * as vscode from "vscode";

export interface Tags {
  text: string;
  index: number;
  range: {
    start: vscode.Position;
    end: vscode.Position;
  };
}

export function getTailwindcssinjsTagsFromDocument(
  textDocument: vscode.TextDocument,
  templateStringKeyword: string
): Tags[] {
  const text = textDocument.getText();
  const strPatternTag = `(${templateStringKeyword}\`)([^\`]*)+\``
  const patternTag = new RegExp(strPatternTag, 'g');
  const tags: Tags[] = [];
  let tag: RegExpExecArray | null;
  while ((tag = patternTag.exec(text))) {
    const index = tag.index + `${templateStringKeyword}\``.length;
    const tagx = {
      text: tag[2],
      index,
      range: {
        start: textDocument.positionAt(index),
        end: textDocument.positionAt(index + tag[2].length),
      },
    };

    tags.push(tagx);
  }
  return tags;
}

export function getTailwindcssinjsTagFromPosition(
  position: vscode.Position,
  tags: Tags[]
) {
  for (const tag of tags) {
    const tagStartLine = tag.range.start.line;
    const tagEndLine = tag.range.end.line;
    const tagStartCharacter = tag.range.start.character;
    const tagEndCharacter = tag.range.end.character;
    const line = position.line;
    const character = position.character;
    let insideLine = false;
    let insideChar = false;
    if (
      (line === tagStartLine && character >= tagStartCharacter) ||
      line > tagStartLine
    ) {
      insideLine = true;
    }
    if (
      (line === tagEndLine && character <= tagEndCharacter) ||
      line < tagEndLine
    ) {
      insideChar = true;
    }
    if (insideLine && insideChar) {
      return tag;
    }
  }
}
