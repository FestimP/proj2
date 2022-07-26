
import FunkApp from './hooks/hooks';
import Apply from './multipleHooks/hookMe';
import Tabs from './tab1/tab';
import './App.css';
function App() {
  return (
    <div className="App">
   <Tabs/>
   <FunkApp/>
   <Apply/>
    </div>
  );
}

export default App;
