import React from 'react';
import { render } from 'react-dom';
import style from './style';
import Foo from '../../react-foo-component/src/index';

function App() {
  return (
    <div style={style.root}>
      <div>Example app for Foo component</div>
      <div><a href="https://github.com/rafrex/react-component-dev">react-component-dev</a></div>
      <Foo />
    </div>
  );
}

render(<App />, document.getElementById('root'));
