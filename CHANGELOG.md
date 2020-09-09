# Release Notes
## 0.1.7
Compatible with tailwindcss 1.8.x  
Added configuration:  
```json
"tailwindcssinjs.useCompletionItemProviderTriggerProxy": {
  "type": "boolean",
  "default": true,
  "description": "use Trigger character completion proxy."
},
"tailwindcssinjs.ignoreErrors": {
  "type": [
    "string",
    "null"
  ],
  "default": null,
  "description": "If this string regex matches the error will be ignored"
}
```

## 0.1.6
revert enter trigger

## 0.1.5
Fix [#2](https://github.com/Arthie/vscode-tailwindcssinjs/issues/2): removed `` ` `` as trigger character

## 0.1.4

Compatible with tailwindcss 1.7.x  
Updated to typescript-tailwindcssinjs-plugin 0.3.1  

## 0.1.3

Compatible with tailwindcss 1.7.x

## 0.1.2

Compatible with tailwindcss 1.6.x

## 0.1.1

first release!
