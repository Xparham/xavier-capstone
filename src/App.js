import {Route, Switch} from 'react-router-dom'
import { FoodSearch, Home, Contact, Questionare } from './pages';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search' component={FoodSearch}/>
      <Route exact path='/contact-us' component={Contact}/>
      <Route exact path='/questionaire' component={Questionare}/>
    </Switch>
  );
}

export default App;
