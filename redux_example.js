console.clear()

// Peopledropping off a form

const createPolicy = (name, amount) => {
  return { //Action
    type:'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountMoneyToCollect: amountMoneyToCollect
    }
  }
}

// Reducers (Departments)

const claimsHistory = (oldListOfClaims = [], action) => {
   if(action.type === 'CREATE_CLAIM') {
     return [...oldListOfClaims, action.payload];
   }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountMoneyToCollect;
  } else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  } 
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if(action.type == 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if(action.type=== 'DELETE_POLICY') {
    return listOfPolicies.fileter((p) => p !== action.payload.name);
  }
  return listOfPolicies;
};

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

const action = createPolicy('Alex', 20);
console.log(action);

store.dispatch(action);
console.log(store.getState());