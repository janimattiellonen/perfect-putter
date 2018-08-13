import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import Root from './Root';

import './index.css';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const store = createStore(history);

function render(Component, rootElement) {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    rootElement,
  );
}

const rootElement = document.getElementById('root');
render(Root, rootElement);

registerServiceWorker();
