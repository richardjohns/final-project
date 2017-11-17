const React = require('react')
import {render} from 'react-dom'
import {Provider} from 'react-redux'
const {createStore, applyMiddleware, compose} = require('redux')
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
// import App from './components/App'

function makeStore() { return createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware)
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
}

module.exports = makeStore

// export default function makeStore() { return createStore(
  //   reducers,
  //   compose(
    //     applyMiddleware(thunkMiddleware),
    //     window.devToolsExtension ? window.devToolsExtension() : f => f
    //   )
    // )
    // }
    
    // const store = createStore(reducers, compose(
      //   applyMiddleware(thunkMiddleware),
      //   window.devToolsExtension ? window.devToolsExtension() : f => f
      // )) 
      
// document.addEventListener('DOMContentLoaded', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('app')
//   )
// })

