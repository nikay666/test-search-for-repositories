import {  ThemeProvider } from '@material-ui/core/styles';


import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import { RepositoriesPage } from './Pages/RepositoriesPage';
import { SearchPage } from './Pages/SearchPage';
import { MainContainer } from './Components/MainContainer';
import { theme } from './theme';
import './App.css';

function App() {
  
  return (
    <div className="app">
      <ThemeProvider theme={theme} >
        <Router>
          <MainContainer>
            <Switch>
              <Route exact path='/' component={SearchPage} />
              <Route path='/repositories/:id' component={RepositoriesPage} />
            </Switch>
          </MainContainer>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
