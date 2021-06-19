import Navbar from './Navbar';
import Home from './Home';
import DynamicTable from './DynamicTable';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div className="maplearn">
        <DynamicTable />
      </div>
    </div>
  );
}

export default App; 
