<p align="center">
  <img src="https://github.com/Arthie/vscode-xwind/raw/master/resources/header.png" alt="xwind">
</p>

# vscode-xwind

Adds editor support for [xwind](https://github.com/Arthie/xwind/tree/master/packages/macro) tagged template syntax: tw\`...\` or xw\`...\`

This extension extends VS Code's typescript language service with [typescript-xwind-plugin](https://github.com/Arthie/xwind/tree/master/packages/typescript-plugin).
Make sure you're using VS Code's typescript version for the extension to work!
If you want to have editor support with your projects typescript version or use a different editor check out
[typescript-xwind-plugin's documentation](https://github.com/Arthie/xwind/tree/master/packages/typescript-plugin) for install instructions.

It also works with other solutions that use the tw tagged template but issues specific to those might not be solved.

## Features

- **Autocomplete** for all tailwind classes and variants and xwind custom array syntax
- **CSS preview** on hover and completion details
- **Errors** for classes that don't exist
- **Automatically** finds your projects `tailwind.config.js`
- **React to changes** made in `tailwind.config.js`
- **No generated CSS file**
- **No class mismatch** it uses your project's installed version of tailwind

## Installation

[Go to VS Code extensions marketplace](https://marketplace.visualstudio.com/items?itemName=Arthie.vscode-xwind)

## Demo

### Autocomplete

![autocomplete](https://github.com/Arthie/vscode-xwind/raw/master/resources/autocomplete.gif)

### CSS hover preview

![hover](https://github.com/Arthie/vscode-xwind/raw/master/resources/hover.gif)

### Errors

![error](https://github.com/Arthie/vscode-xwind/raw/master/resources/error.gif)

### Reacting to tailwind.config.js changes

![react](https://github.com/Arthie/vscode-xwind/raw/master/resources/react.gif)

## Configuration

```json
"xwind.useCompletionItemProviderTriggerProxy": {
  "type": "boolean",
  "default": true,
  "description": "use Trigger character completion proxy."
},
"xwind.ignoreErrors": {
  "type": [
    "string",
    "null"
  ],
  "default": null,
  "description": "If this regex pattern string matches the error will be ignored"
}
```
