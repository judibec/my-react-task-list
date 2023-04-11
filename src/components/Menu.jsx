import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SobreNosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/App">Tareas</Link>
        </li>
      </ul>
    </nav>
  );
}