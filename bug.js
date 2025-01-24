```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including initial render
    console.log('Effect ran!');
    return () => {
      console.log('Cleanup function ran!');
    };
  }, []); // Empty dependency array - effect runs only once after initial render

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```