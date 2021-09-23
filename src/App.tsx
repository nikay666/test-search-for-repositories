import React from 'react';
import {  ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router , Switch, Route, HashRouter} from 'react-router-dom';
import {ApolloProvider} from "@apollo/client";
import { client } from './ApolloClient';
import { theme } from './theme';
import { RepositoriesPage } from './Pages/RepositoriesPage';
import { SearchPage } from './Pages/SearchPage';
import { MainContainer } from './Components/MainContainer';
import './App.css';

function App() {

  return (
    <div className="app">
      <ThemeProvider theme={theme} >
        <ApolloProvider client={client} >
          <HashRouter>
            <MainContainer>
              <Switch>
                <Route exact path='/' component={SearchPage} />
                <Route path='/repositories/:id'  component={RepositoriesPage} />
              </Switch>
            </MainContainer>
          </HashRouter>
        </ApolloProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
