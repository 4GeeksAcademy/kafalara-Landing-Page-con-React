import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container" style={{ paddingLeft: "200px" }}>
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      </div>
      
      {/* Botón para colapsar el menú en pantallas pequeñas */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menú colapsable */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
          <div class="container" style={{ paddingRight: "190px" }}>
            <a className="nav-link" href="#">Contact</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

