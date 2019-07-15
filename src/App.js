import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import { IconfontStyle } from './statics/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
import Download from './pages/download'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Register from './pages/register'
import Write from './pages/write'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconfontStyle />
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/download' exact component={Download}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/register' exact component={Register}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter> 
        </Provider>
      </Fragment>
    )
  }
};

export default App;
