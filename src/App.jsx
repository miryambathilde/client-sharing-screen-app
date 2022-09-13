import './App.css';

// Socket
import io from 'socket.io-client';

const socket = io.connect("http://localhost:4000");

// App
function App () {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export default App;
