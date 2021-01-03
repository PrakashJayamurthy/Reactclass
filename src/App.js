import logo from './logo.svg';
import './App.css';
import {PersonelData} from './PersonelData'
import {Privacy} from './Privacy'
import {Child3} from './PropsDrilling/Child3'
import {Child2} from './PropsDrilling/Child2'
import {Child1} from './PropsDrilling/Child1'
import {Country} from './Country/Country'
import {Question} from './Question/Question'
import {Questionfun} from './Question/Questionfun'
import {UserProvider} from './PropsDrilling/UserContext'
import {BrowserRouter,  Route} from 'react-router-dom'



var datas = {
  name: 'Prakash',
  age : 26,
  address : 'Chennai'
}

function App() {
  return (
    <div className="App">
         <BrowserRouter>

           <Route exact strict path="/" render={()=><Country data={datas}/>}></Route>

           <Route exact strict path="/question" render={()=><Question/>}></Route>

           <Route exact strict path="/questionfun" render={()=><Questionfun/>}></Route>
         
         </BrowserRouter> 
    </div>
  );
}

export default App;