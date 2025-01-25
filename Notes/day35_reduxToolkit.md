# 09 - Jan - 2025

## redux toolkit

- install first
- app.jsx -><- store -><- slice(company)
- slice 
- payload (arguments hai) 

- useSelector() hook
- useDispatch() hook 

--------

# 09 - Jan - 2025

> [official website](https://react-redux.js.org/introduction/getting-started)

# Redux Toolkit Notes

## What is Redux Toolkit?
Redux Toolkit (RTK) is the official, recommended way to use Redux for managing state in React applications. It simplifies the setup and usage of Redux by providing powerful utilities and abstractions.

---

## Key Features
- **Simpler Redux Logic**: Combines reducers, actions, and action creators.
- **Immer Integration**: Allows writing immutable state updates in a more intuitive way.
- **Built-in Thunk Middleware**: Simplifies async logic.
- **Developer Experience**: Includes Redux DevTools for debugging.
- **Pre-configured Store**: Simplifies store setup.

---

## Installation
```bash
npm install @reduxjs/toolkit react-redux
```

---

## Core Concepts

### 1. `configureStore`
Creates a Redux store with good defaults, including middleware and DevTools setup.

#### Example:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

### 2. `createSlice`
Combines reducers, actions, and initial state into a single entity.

#### Example:
```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### 3. `createAsyncThunk`
Handles async logic like API calls.

#### Example:
```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const response = await axios.get(`/api/user/${userId}`);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities.push(action.payload);
      });
  },
});

export default userSlice.reducer;
```

---

## Setting Up Redux Toolkit in React

### Step 1: Create a Store
Use `configureStore` to set up the store.

#### Example:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

### Step 2: Provide the Store
Wrap your React app with the `Provider` component from `react-redux`.

#### Example:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Step 3: Use State and Dispatch
- Use `useSelector` to read state.
- Use `useDispatch` to dispatch actions.

#### Example:
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

---

## Middleware
Redux Toolkit includes default middleware like `redux-thunk` and allows adding custom middleware.

#### Example:
```javascript
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
```

---

## Advantages of Redux Toolkit
- Reduces boilerplate code.
- Simplifies async state management.
- Encourages best practices.
- Integrates seamlessly with the Redux DevTools.

---

## Additional Resources
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)

---

Start using Redux Toolkit to manage state effectively and simplify your React development workflow!