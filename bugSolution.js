```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The count update is outside the dependency array 
    // The dependency array is empty, so this will run only once after the component mounts
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```