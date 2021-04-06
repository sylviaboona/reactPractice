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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FWDRefParentInput from './components/FWDRefParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';


function App() {
  return (
    <div className="App">
      <CounterTwo> 
        {(count, incrementCount)=>(<ClickCounterTwo count={count} incrementCount={incrementCount} />)} 
      </CounterTwo>
      <CounterTwo> 
        {(count, incrementCount)=>(<HoverCounterTwo count={count} incrementCount={incrementCount} />)} 
      </CounterTwo>
      {/* <ClickCounterTwo /> */}
      {/* <HoverCounterTwo /> */}
      {/* <User render= {(isLoggedIn) => isLoggedIn? "Sylvia": "Guest"}/> */}
      {/* <ClickCounter name='Sylvia' /> */}
      {/* <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName = "Batman"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName = "Ironman"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName = " Joker"/>
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FWDRefParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp />  */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
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
