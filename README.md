# ts-server-template

The clean, typescript, backend server template

# Dependency updates

use

```
pnpm install -g npm-check-updates
```

to update and install dependencies

---

Change your tsconfig.json to below if you want to interact with dom

```
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
    "node_modules"
  ]
}
```
