import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './routes/Error/index.tsx';
import Cadastro from './routes/Cadastro/index.tsx';
import Login from './routes/Login/index.tsx';
import Saida from './routes/Saida/index.tsx';
import { Providencias } from './Providencia.tsx';


const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
      {path:"/cadastro", element: <Cadastro/>},
      {path:"/login", element: <Login/>},
      { path: "/saida", element: <Saida /> }
    ]
  } 
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providencias>
      <RouterProvider router={router} />
    </Providencias>
  </StrictMode>,
)
