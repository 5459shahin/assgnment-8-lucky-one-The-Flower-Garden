import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';


function App() {

  return (
    <div className='shop-name'>
      <Header></Header>
      <h1>The Flower Garden</h1>
      <Shop></Shop>
      <div c>
      <h4>how react woks?</h4>
           <p>
              <b>answer :</b> React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.
              React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
           </p>
       <h4>how useState works?</h4>
       <p> 
         <b>answer : </b>
           useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
         The useState hook allows us declare one or more state variables in function components. Under the hood, React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component (trust me when I say this — that is some JavaScript closures magic happening there)

       </p>
       <h4>props vs state?</h4>
       <p><b>answer :</b>
          In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.
         Passing state as props from parent to child components is a core concept of React. By keeping state in only a few components and passing it to as many children as needed in the form of props, you will be able to write code that is easier to maintain, and you will thank yourself down the road
        </p>
  

                    
      </div>

      
    </div>
  );
}

export default App;
