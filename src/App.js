
import React from 'react';
import './App.css';
import FormInput from './components/frominput';
import ListTask from './components/ListTask';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducers/task';

var store = createStore(reducer);

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Provider store={store}>
        <div>
          <FormInput></FormInput>
          <ListTask ></ListTask>
        </div>
      </Provider>
    );
  }
}

export default App;