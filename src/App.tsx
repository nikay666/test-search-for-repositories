import {  ThemeProvider } from '@material-ui/core/styles';


import React from 'react';
import { BrowserRouter as Router , Switch, Route, HashRouter} from 'react-router-dom';
import { RepositoriesPage } from './Pages/RepositoriesPage';
import { SearchPage } from './Pages/SearchPage';
import { MainContainer } from './Components/MainContainer';
import { theme } from './theme';
import './App.css';

function App() {

  return (
    <div className="app">
      <ThemeProvider theme={theme} >
        <HashRouter>
          <MainContainer>
            <Switch>
              <Route exact path='/' component={SearchPage} />
              <Route path='/repositories/:id' component={RepositoriesPage} />
            </Switch>
          </MainContainer>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
