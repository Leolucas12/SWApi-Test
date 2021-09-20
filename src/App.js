import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
