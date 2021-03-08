import Home from './components/pages/Home';
import NavigationBar from './components/UIComponents/common/NavigationBar';
import './Sass/main.scss';
function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
