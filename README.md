# StarWars App

This projects includes:

- Vite as the Dev Tool
- Configuration with ESLint + Prettier + VitePluginESLint to have a proper code-base between multiple devs in a team.
- [NES.css](https://github.com/nostalgic-css/NES.css) styling library for the layout.

On the code we use:

- Vue 3
- [Suspense boundary](/src/App.vue) to load async components.
- [Custom v-model component](/src/components/SortBy.vue) to separate the layout from the logic.
- [Util functions](/src/utils.js) to format numbers and detect unknown values.

## How to run it

```bash
npm install
```

```bash
npm run dev
```
