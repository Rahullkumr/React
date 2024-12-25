
# 24 - Dec - 2024

## LIFECYCLE METHODS

- Lifecycle methods are the methods that tell about the lifecycle of any component.
- They are defaultly available in class-based components only.
- Function-based components (FBC) do not provide any default lifecycle method. If we want to achieve lifecycle methods in FBC, we can take help of hooks such as the "useEffect" hook.
- They are divided into 3 categories: 
  1. Mounting phase
  2. Updating phase
  3. Unmounting phase

### Three Phases of Lifecycle Methods
These phases represent the unique lifespan of the component:
1. **Mounting Phase**: Represents how the component is created and rendered on the UI.
2. **Updating Phase**: Starts when the user performs any action/update like clicking, hovering, form submission, etc.
3. **Unmounting Phase**: Has only one method, `componentWillUnmount()`. This method returns a function in which we can stop/clear ongoing tasks in the current component. This phase occurs when we/user navigates from one component to another.

---

### Mounting Phase Methods

**Methods**: `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`

1. **constructor()**:
   - Executes first and only once.
   - Best place for initializing variables and states because it ensures that the same state or variable will not get re-initialized repeatedly.

2. **getDerivedStateFromProps()**:
   - Executes after the `constructor()`.
   - Used to accept props from the parent component and allows writing JavaScript logic inside.

3. **render()**:
   - Executes after the `getDerivedStateFromProps()`.
   - Contains a return statement that returns JSX.
   - Used to display the content/JSX on the UI.

4. **componentDidMount()**:
   - Executes after the `render()`, once JSX is rendered.
   - React can perform heavy computations or "side-effects" (e.g., time-consuming activities) here.
   - Examples of side-effects: Fetching data, network-related operations, DOM manipulation.
   - This method executes only once.

---

### Updating Phase Methods

**Methods**: `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `getSnapshotBeforeUpdate()`, `render()`, `componentDidUpdate()`

- All methods can execute multiple times.

1. **getDerivedStateFromProps()**:
   - Has information about the current state and props.
   - Can execute multiple times.
   - Used to accept props from the parent component and allows writing JavaScript logic inside.

2. **shouldComponentUpdate()**:
   - Compares the current state and previous state.
   - Returns `true` if changes are detected; otherwise, returns `false`.
   - If it returns `true`, the remaining methods of the updating phase will execute.

3. **getSnapshotBeforeUpdate()**:
   - Executes only if `shouldComponentUpdate()` returns `true`.
   - Stores the previous value of the state, which can be used if required.

4. **render()**:
   - Renders the updated state on the UI.

5. **componentDidUpdate()**:
   - Checks for changes in the state and handles side-effects based on those changes.
   - Executes many times but only when there is some changes in the state

---

### Unmounting Phase Methods

**Methods**: `componentWillUnmount()`

1. **componentWillUnmount()**:
   - Clears ongoing tasks in the current component before navigating to another component.
   - Example: If an interval is set in the current component, it can be cleared in this method before navigation.
