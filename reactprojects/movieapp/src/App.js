import React, { useContext } from 'react';
import Menubar from "./components/menubar";
import { locationcontext } from './context';
function App(){
  const location=useContext(locationcontext);//access context
  return (
    <div>
      <Menubar title="MyShow" location={location}></Menubar>
    </div>
  );
}
export default App;