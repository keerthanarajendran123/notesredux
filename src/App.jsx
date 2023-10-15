import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import Sidebar from './components/Sidebar';
import Createnotes from './components/Createnotes';
import Noteslist from './components/Noteslist';
import { Provider } from 'react-redux';
import store from './redux/store'; 

function App() {
  return (
    <Provider store={store}>
      <Sidebar />
      <Createnotes />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Noteslist />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
