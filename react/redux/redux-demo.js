const redux = require("redux");

/*
step 2: craete the reducer
input :OLD state+ dispatched action
output : New State object
reducer function must be a pure function 
ie no changes in data ie same values of the input should always produce exaclty same output and 
there should not be any side effects, ie no http request  or write something to localStorage or get something from localStorage
*/
const counterReducer = (state = { counter: 0 }, action) => {
  /**we should give default value to state otherwise, when it will run for first time it will throw error TypeError: Cannot read properties of undefined (reading 'counter')
as when it ran for very first time there is nothing in state
*/

  //step 7: we can look for the action and return state accordingly
  if (action.type === "increment")
    return {
      counter: state.counter + 5,
    };
  if (action.type === "decrement")
    return {
      counter: state.counter - 1,
    };

  return state;
};

//Step 1:create store
const store = redux.createStore(counterReducer); //step 3: pass the reducer funtion to the store, as store need to know which reducer is responsible for changing that store

//Step 4: component which subscribe to the store
const counterSubscriber = () => {
  const latestState = store.getState(); // getState is the method that is available with the store created and gives the latest state after it was changed

  console.log(latestState);
};

//step 5: Make redux aware of the subscriber function and tell that this function should be executed whenthe state changes
store.subscribe(counterSubscriber); // It takes the function which need to be executed when the state in store changes as argument

//Step 6: create action that should be dispatched to mutate the state of store
store.dispatch({ type: "increment" }); // it is a method which dispatch as action and run the reducer function
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
