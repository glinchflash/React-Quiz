import './App.css';
import Header from './components/Header';
import Settings from "./Helpers/Settings";
import Questions from "./components/Questions";
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <Header/>
            <Form/>
            <Questions/>
        </div>

    );
}

export default App;