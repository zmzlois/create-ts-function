# ts-server-template

The clean, typescript, backend server template you have been looking for. Nothing included. No React Framework. No fullstack template. Only BARE ESSENTIALS. Finishing writing your backend, deploy it to [Railway](https://railway.app) or [fly.io](https://fly.io/) and you are good to go.

<h3 style="text-align: center;">Clean. Simple.</h3>

### This template includes

- express
- node.js
- prettier
- ts-node
- eslint
- body-parser
- dotenv

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
    "lib": ["es2022", "dom"],
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```
