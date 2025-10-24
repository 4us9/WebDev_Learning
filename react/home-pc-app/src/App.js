import MyButton from './button.js';


function App() {
  return (
        <div>
            <h1>Welcome to my app </h1>

            {/*Syntax that is used for HTML like syntax in React components*/}

            {/*Notice that <MyButton/> starts with cap letter? This is a React component*/}
            <MyButton /> {/* React components must always start with a capital letter while
                        HTML tags don't use capital letters.*/}

        </div>
    );
}

export default App; //just here in case people to import your modules.

/*your function name should be capitalized (PascalCase)
to be recognized correctly as a React component.*/