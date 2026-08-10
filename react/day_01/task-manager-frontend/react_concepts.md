### 1. The difference between props and state
## State
- Used for data that changes over time
- Can be changed
- Controlled by component

## Props
- Used to pass information
- Cannot be changed (read-only)
- Controlled by parent

### 2. Why state must not be mutated directly
- React relies on reference changes to detect that state has changed, if the state is mutated, the reference remains the same, react may not be able to identify the change correctly

### 3. Why keys are needed when rendering a list
- Keys uniquely identifies list items, so react can efficiently detect which item was added, deleted or changed

### 4. What causes a React component to re-render
- A react component re-renders when a state changes or a prop changes

### 5. How the child components communicate actions back to App.jsx
- A child component communicate actions back to App.jsx by receiving a callback function as props.
