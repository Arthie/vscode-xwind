<p align="center">
  <img width="564" height="238" src="resources/header.png" alt="tailwindcssinjs">
</p>

# vscode-tailwindcssinjs

Adds editor support for [@tailwindcssinjs/macro](https://github.com/Arthie/tailwindcssinjs/tree/master/packages/macro) tagged template syntax: tw\`...\`

This extension extends vscode's typescript language service with [typescript-tailwindcssinjs-plugin](https://github.com/Arthie/tailwindcssinjs/tree/master/packages/typescript-plugin).
Make sure you're using vscode's typescript version for the extension to work!
If you want to have editor support with your projects typescript version or use a different editor check out
[typescript-tailwindcssinjs-plugin's documentation](https://github.com/Arthie/tailwindcssinjs/tree/master/packages/typescript-plugin) for install instructions.

It also works with other solutions that use the tw tagged template but issues specific to those might not be solved.

## Features

- **Autocomplete** for all tailwind classes and variants and tailwindcssinjs custom array syntax
- **CSS preview** on hover and completion details
- **Errors** for classes that don't exist
- **Automatically** finds your projects `tailwind.config.js`
- **React to changes** made in `tailwind.config.js`
- **No generated CSS file**
- **No class mismatch** it uses your project's installed version of tailwind
- **Zero config** this extension has no configuration

## Demo

WIP
