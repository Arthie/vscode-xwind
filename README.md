<div align="center">
  <img src="resources/header.png" alt="tailwindcssinjs">
</div>

# vscode-tailwindcssinjs

vscode extension for @tailwindcssinjs/macro

Adds editor support for @tailwindcssinjs/macro tagged template syntax tw\`...\`

This extension extends vscode's typescript language service with typescript-tailwindcssinjs-plugin
In order for the plugin to work make sure you're using vscode's typescript version!
If you want to have editor support with your projects version of typescript or use a different editor check out
typescript-tailwindcssinjs-plugin's documentation for install instructions.

It also works with other solutions that use the tw tagged template but issues specific to those might not be solved.

## Features

- **Autocomplete** for all tailwind classes and variants
- **CSS preview** on hover and completion details
- **Errors** for classes that don't exist
- **Automaticly finds** your projects `tailwind.config.js`
- **React to changes** made in `tailwind.config.js`
- **No generated CSS file**
- **No classname mismatch** it uses your project's installed version of tailwind
- **Zero config** this extension has no configuration
