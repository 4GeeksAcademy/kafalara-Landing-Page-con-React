import React from 'react';

function Jumbotron() {
  return (
    <div className="container mt-4">
    <div className="jumbotron bg-light p-5 rounded-lg"> {/* se coloca el fondo gris */}
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">Phasellus quis velit felis. Donec nisi orci, tempor ut risus et, vehicula mollis quam. Vestibulum nisl lectus, 
        malesuada ac tortor non, egestas euismod nisi.</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
    </div>
    </div>
  );
};

export default Jumbotron;

