import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//first componenet
const App = () => { // function declaration in Modern JS

  return (
    <div>
      <h1>Hello World!</h1>
      <p>I love saying hello world </p>
    </div>
  ) //wrap in single parent element
  // return () is a JSX thing, not JS
}
// links component to html
ReactDOM.render(<App />, document.getElementById('root')); // component name
registerServiceWorker();
