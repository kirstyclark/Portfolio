import Home from './components/Home';
import styles from './App.module.scss';
import Scroll from './components/Scroll';

const App = () => {
  return (
    <div className={`app ${styles.app}`}>
      <Home />
      <Scroll /> 
    </div>
  );
}

export default App;
