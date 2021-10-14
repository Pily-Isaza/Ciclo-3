import './App.css';

function App() {
  return (
    <div className="App">
   <header class="header">
        <nav class="nav">
            <a href="#" class="logo nav-link" img src="./imagenes/logo.png" height="80" width="80"></a>
            <button class="nav-toggle"><i class="fas fa-bars"></i></button>
            <ul class="nav-menu nav-menu_visible">
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link nav-menu-link_active">Inicio</a></li>
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link nav-menu-link_active">Contacto</a></li>
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link nav-menu-link_active">Administración</a></li>
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link nav-menu-link_active">Perfil</a></li>

            </ul>
        </nav>
    </header>
    </div>
  );
}

export default App;
