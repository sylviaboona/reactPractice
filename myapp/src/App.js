import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';


function App() {
  return (
    <div className="App">
      <LifeCycleA />
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ChildComponent /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Greet name='Sylvia' heroName='wonderWoman'>
        <p>This is a child prop</p>
      </Greet> */}
      {/* <Greet name='Monica'  heroName='ironLady'>
        <button>ClickMe</button>
      </Greet> */}
      {/* <Greet name='Emma'  heroName='Batman' /> */}

      {/* <Welcome name='Monica'  heroName='ironLady' /> */}
      {/* <Welcome name='Emma'  heroName='Batman' /> */}
      {/* <Welcome name='Sylvia' heroName='wonderWoman' /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
