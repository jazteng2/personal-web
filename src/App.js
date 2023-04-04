import './App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Main from './components/Main';
// TO DO: 
// 1. Implement css media for phones
// 2. create footer
function App() {
    return (
        <div className="App">
            <Header />
            <div className='container'>
                <LeftMenu />
                <Main />
            </div>
        </div>
    );
}

export default App;