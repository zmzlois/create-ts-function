# ts-server-template

The clean, typescript, backend server template

## Dependency updates

Use

```sh
# Unix (MacOS & Linux)
pnpx npm-check-updates -u && pnpm install
```

OR

```sh
# Powershell (Windows)
pnpx npm-check-updates -u; pnpm install
```

to update and install dependencies

---

## Working with DOM

Change your `tsconfig.json` to below if you want to interact with dom.

```json
//tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "sourceMap": true,
    "resolveJsonModule": true,
    "lib": [
      "es2022",
      "dom"
    ],
    "esModuleInterop": true
  },
  "include": [
    "src/**/*.ts",
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```
