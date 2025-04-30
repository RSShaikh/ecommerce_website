import logo from './logo.svg';
import './App.css';
import Navbar from './customer/components/navigation/navigation';
import CategoriesDropdown from './customer/components/navigation/CategoriesDropdown';
import MensDropdown from './customer/components/navigation/MensDropdown';
import WomensDropdown from './customer/components/navigation/WomensDropdown';
import JwelleryDropdown from './customer/components/navigation/JwelleryDropdown';
import PerfumesDropdown from './customer/components/navigation/PerfumesDropdown';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoriesDropdown/>
      <MensDropdown/>
      <WomensDropdown/>
      <JwelleryDropdown/>
      <PerfumesDropdown/>
      
    
    </div>
  );
}

export default App;
