import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import ComponentA from './componentA';

const App: React.FC = () => {
  return (
    <>
      <h1>dinner is ready</h1>
      <ComponentA />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
