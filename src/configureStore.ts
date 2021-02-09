import rootreducer from './reducers/rootreducer';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import { applyMiddleware, createStore, compose,StoreEnhancer } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState?:any) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers:StoreEnhancer<unknown, {}> | undefined = compose(...enhancers);

  const store = createStore(rootreducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/rootreducer', () => store.replaceReducer(rootreducer));
  }

  return store;

}
