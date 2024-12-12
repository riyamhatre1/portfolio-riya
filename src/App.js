import './App.css';
import Home from './Home';

export var handleEvent = (e) => {
  document
    .getElementById(e)
    .scrollIntoView({ behavior: "smooth", block: "start" });
};

function App() {
  return (
    <>
    <Home />
    </>
  );
}

export default App;
