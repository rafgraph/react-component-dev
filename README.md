# React Component Dev

[Live example app for Foo component](http://react-component-dev.rafrex.com)

Minimalistic boilerplate for creating a React component
- Component development in the `master` branch.
- Example app that demonstrates the component in the `gh-pages` branch.
- Clone the two branches into separate directories, and require the component from within the example app.

Note that while `webpack` is run from the example app (`gh-pages` branch), the imported files from the component (`master` branch) use the component branch's babel settings and not the babel settings from the example app branch.
