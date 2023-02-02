import './App.css';
import NavBar from './features/Component/NavBar';
// import Router from './Components/RouteFiles/Router';
import RouterFile from './features/Component/RouterFile/RouterFile';

function App() {
  return (
    <div className='main-container'>
      <NavBar/>
      <RouterFile/>
     
    </div>
  )
}

export default App;