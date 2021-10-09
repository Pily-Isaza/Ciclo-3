
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import stylesVentasBD from 'styles/pages/ventas/VentasBD.css'
import stylesComponentsBasededatos from 'styles/components/Ventas/componentsBasededatos.css'
import stylesComponentsBuscar from 'styles/components/Ventas/Buscar.css'
import stylesComponentsFormulario from 'styles/components/Ventas/componentsFormulario.css'
import stylecomponentsBasededatosventas from 'styles/components/Ventas/componentBasededatosventas.css'
import VentasBD from "pages/ventas/VentasBD"
import Ventadescripcion from "pages/ventas/Ventadescripcion";
import Gestionusuarios from "pages/usuarios/Gestionusuarios";
import Formulario from 'components/Roles/Formulario';
import Layout from "layouts/Layout";
import Login from "pages/login/Login";
import Registro from "pages/login/Registro";
import AuthLayout from "layouts/authLayout";
import PublicLayout from "layouts/publicLayout";
import ProductosBD from "pages/productos/ProductosBD";
import ProductoNuevo from "pages/productos/ProductoNuevo";


function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/usuarios", "/usuarios/:id", "/ventas", "/productos", "/productoNuevo", "/ventas:codigo/descripcionVenta"]}>
          <Layout>
            <Switch>
              <Route path="/usuarios/:id">
                <Formulario />
              </Route>
              <Route path="/usuarios">
                <Gestionusuarios />
              </Route>

              <Route path="/ventas:codigo/descripcionVenta">
                <Ventadescripcion/>
              </Route>
              <Route path="/ventas">
                <VentasBD/>
              </Route>

              <Route path="/productos">
                <ProductosBD/>
              </Route>
              <Route path="/productoNuevo">
                <ProductoNuevo />
              </Route>

            </Switch>
          </Layout>
        </Route>

        <Route path={["/login", "/registro"]}>
          <AuthLayout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registro">
              <Registro />
            </Route>
          </Switch>
          </AuthLayout>
        </Route>
          
        <Route path={["/"]}>
          <PublicLayout>
          <Switch>
            <Route exact path="/">
            <h1>Inicio</h1>
            </Route>
          </Switch>
          </PublicLayout>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
