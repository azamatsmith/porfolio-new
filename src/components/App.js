import React from 'react';

import 'tachyons/css/tachyons.min.css';
import 'reset-css/reset.css';
import 'animate.css';
import './App.css';

const App = ({ children }) => {
  return <div className="App">{children}</div>;
};

export default App;
