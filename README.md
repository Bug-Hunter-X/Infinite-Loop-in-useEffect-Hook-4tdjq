# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications where an infinite loop occurs within the `useEffect` hook. The bug arises from incorrectly updating the state within the dependency array, leading to a continuous re-rendering and state update cycle.

## Bug Description
The `MyComponent` function uses the `useState` hook to manage a count variable.  The `useEffect` hook is intended to update the count when the component mounts. However, the update to `setCount` inside the `useEffect` causes the component to rerender, triggering the `useEffect` again, creating an infinite loop.

## Solution
The solution involves correctly managing the state updates within the `useEffect` hook to prevent the infinite loop.