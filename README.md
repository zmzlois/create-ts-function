# ts-server-template

The clean, typescript, backend server template you have been looking for. Nothing included. No React Framework. No fullstack template. Only BARE ESSENTIALS. Finishing writing your backend, deploy it to [Railway](https://railway.app) or [fly.io](https://fly.io/) and you are good to go.

**Clean. Simple.**

## This template includes

- express
- node.js
- prettier
- ts-node
- eslint
- superjson
- dotenv

## How to user this template? 
![Screenshot 2023-04-11 at 19 44 04](https://user-images.githubusercontent.com/79988376/231259312-8fbc0e26-f8e3-45ed-9adc-1198fa0b4e33.png)
Click on `use this template` and -> `create a new repository`


## Copy .env-example to .env

Copy .env-example to .env and edit the new file to add your environment variables. .env is already ignored in .gitignore

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
