# React Component Dev

[Demo website for SomeComponent](https://react-component-dev.rafgraph.dev)

Minimalistic boilerplate for creating a React component
- Component development in the `main` branch
- Example app that demonstrates the component in the `gh-pages` branch
- Clone the two branches into separate directories and link the component via `yarn link`
  - Run `$ yarn run dev` in the `main` branch and `$ yarn run start-local` in the `gh-pages` branch
  - When done, unlink the component - run `$ yarn unlink` in the `main` branch and `$ yarn run unlink` in the `gh-pages` branch
- Replace instances of `some-component` with the new component's name in `package.json` and `webpack.config.js`
