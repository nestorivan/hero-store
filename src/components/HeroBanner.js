import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner row">
      <div className="col-3 sides left" />

      <div className="col-6">
        <div className="content row align-items-center text-center ">
          <div className="content-inner row justify-content-center">
            <div className="col-3 title">
              <h1>Plates</h1>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              iaculis ultricies ex a tempor. Nunc tristique, odio id ornare
              interdum, ipsum augue rutrum lacus, sed blandit felis lorem nec
              nibh.
            </p>
          </div>
        </div>
      </div>

      <div className="col-3 sides right" />
    </div>
  );
};

export default HeroBanner;
