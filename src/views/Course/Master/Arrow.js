import React from 'react';

const PrevArrow = (props) => (
  <div
    className="custom-arrow custom-prev-arrow"
    onClick={props.onClick}
  >
   <i class="ri-arrow-left-s-line"></i>
  </div>
);

const NextArrow = (props) => (
  <div
    className="custom-arrow custom-next-arrow"
    onClick={props.onClick}
  >
 <i class="ri-arrow-right-s-line"></i>
  </div>
);

export { PrevArrow, NextArrow };
