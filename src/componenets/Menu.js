import React from 'react';
import banner from '../images/lemon-transparent.png';

const MenuPage = () => {
  return (
<div className="custom-container">
<div className="custom-row">
    <div className="custom-col">
        <img src={banner} alt="Menu Image" width="200" class="custom-img" />
    </div>
    <div className="custom-col">
        <h3>Page is coming soon!</h3>
    </div>
</div>
</div>
  );
};

export default MenuPage;