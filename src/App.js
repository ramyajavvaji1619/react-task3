import logo from './logo.svg';
import './App.css';
import Random from './components/random';
import Destination from './components/destination';
import SimpleTodos from './components/todos';
import Withdrwal from './components/withdrwal';
import BrowserHistory from './components/browser'
import Calculator from './components/calculator';
import GoogleSuggestions from './components/google';

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// GoogleSuggestions

const suggestionsList = [
  { id: 1, suggestion: 'Price of Ethereum' },
  { id: 2, suggestion: 'Oculus Quest 2 specs' },
  { id: 3, suggestion: 'Tesla Share Price' },
  { id: 4, suggestion: 'Price of Ethereum today' },
  { id: 5, suggestion: 'Latest trends in AI' },
  { id: 6, suggestion: 'Latest trends in ML' },
]



function App() {
  return (
    <div className="App">
     <Random/>
     <Destination/>
     {/* <Todos/> */}
     <Withdrwal/>
    <Calculator/>
    <BrowserHistory/>
    {/* <Google/> */}
    <SimpleTodos initialTodosList={initialTodosList}/>
      <GoogleSuggestions suggestionsList={suggestionsList} />
     
    </div>
  );
}

export default App;
