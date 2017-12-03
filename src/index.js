import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { basename } from 'config'
import 'react-hot-loader/patch'
import React from 'react'
import App from 'components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './store/configureStore'

const renderApp = () => (
  <Provider store={configureStore()}>
    <MuiThemeProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
