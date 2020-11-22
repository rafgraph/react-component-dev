import React from 'react';
import SomeComponent from 'some-component';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>Example App for Some Component</div>
        <div>
          <a href="https://github.com/rafgraph/react-component-dev">
            react-component-dev
          </a>
        </div>
        <SomeComponent />
      </div>
    );
  }
}
