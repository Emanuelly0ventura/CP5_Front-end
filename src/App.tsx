import { Outlet } from "react-router-dom";
import Cabecalho from './components/Cabecalho/Cabecalho';
import Rodape from './components/Rodape/Rodape';


function App() {
  
  return (
    <>
      <div className="container">
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
      
    </div>
    </>
  )
}

export default App
