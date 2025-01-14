import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://test-socket-app-1tf0.onrender.com');

    ws.onopen = () => {
      console.log('WebSocket connected');
      ws.send('Hello from client!');
    };

    ws.onmessage = (event) => {
      setList(JSON.parse(event.data).data);
    };

    return () => ws.close();
  }, []);

  return (
    <>
      <div>USER LIST</div>
      <ul>
        {list.map((ip) => (
          <li key={ip}>{ip}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
