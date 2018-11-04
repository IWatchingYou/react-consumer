import React, {
  Component
} from 'react';
import './App.css';
import Enquiryform from './views/Enquiryform';
import List from './views/List';
import EnquiryformUpdate from './views/EnquiryformUpdate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="nav-left">
            <ul>
              <li><Link to={'/'} className="text-white"><i className="fab fa-wpforms"></i> Consumer Enquiry</Link></li>
              <li><Link to={'/list'} className="text-white"><i className="fas fa-list"></i> Consumer Informat</Link></li>
            </ul>
          </div>
          <div className="contact">
          <Route path='/' component={Enquiryform} exact={true}/>
          <Route path='/list' component={List}/>
          <Route path='/consumer/:id' component={EnquiryformUpdate}/>
          </div>
          
        </div>
      </Router>
    </Provider>
    )
  }
}

export default App;