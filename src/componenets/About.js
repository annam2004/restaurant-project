import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';

function About() {
  return (
    <section id="about-section" className="about">
      <div className="container">
      <div className="row">  {/* about-content  */}
          <div className="col-sm-12 col-lg-7 about-text">
            <h2 className='pb-3'>Little Lemon Chicago</h2>
            <p>Nested in the heart of Chicago, LIttle Lemon brings the vibrant flavors and warm hospitality of the Mediterranean to the city's bustling dining scene. Inspired by the coastal kitchens of Greece, Turkey, Lebanon, and Italy, Zephyr offers a menu crafted from the freshest ingredients, blending bold spices with time-honored cooking traditions. Whether you're savoring a plate of grilled lamb kebabs, indulging in creamy hummus with house-baked pita, or sharing a seafood mezze platter, every dish at Little Lemon tells a story of sun-soaked shores and rich culinary heritage.</p>
            <p>With a rustic yet modern ambiance, warm wood accents, and an inviting open kitchen, Little Lemeon provides an atmosphere that is both elegant and welcoming. Whether you're stopping by for a casual lunch, a romantic dinner, or a lively evening with friends, Little Lemon is the perfect escape to experience the soul of the Mediterranean—right in the heart of Chicago.</p>
          </div>
          <div className="about-images col-sm-12 col-lg-5">
            <img src={img2} alt="Main Restaurant" className="main-image" />
            <img src={img1} alt="Overlay" className="overlay-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
  
  export default About;