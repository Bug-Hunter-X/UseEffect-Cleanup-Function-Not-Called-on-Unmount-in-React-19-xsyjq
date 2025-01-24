```javascript
import { useRef, useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const componentIsMounted = useRef(true);

  useEffect(() => {
    console.log('Effect ran!');
    return () => {
      console.log('Cleanup function ran!');
      componentIsMounted.current = false; // Prevents cleanup function from setting state after unmount
    };
  }, []);

  useEffect(() => {
    if (componentIsMounted.current) {
        console.log('count changed')
    }
    return () => {
      componentIsMounted.current = false;
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```