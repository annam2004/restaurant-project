import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import backgroundImage  from '../images/lemon2.jpg';
import tst1 from '../images/tst1.jpg';
import tst2 from '../images/tst2.jpg';
import tst3 from '../images/tst3.jpg';

const renderStars = (rating) => {
  const starCount = rating.length; // Count the number of stars in the string
  return Array.from({ length: starCount }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} style={{ color:' #E4B34C' }} />
  ));
};

const reviews = [
    {
      rating: "⭐⭐⭐⭐⭐",
      name: "John Doe",
      image: tst1,
      text: "Amazing food and service!"
    },
    {
      rating: "⭐⭐⭐⭐",
      name: "Jane Smith",
      image: tst2,
      text: "Loved the atmosphere!" 
    },
    {
      rating: "⭐⭐⭐⭐",
      name: "Julia Reed",
      image: tst3,
      text: "Great restaurant! Delisious food!" }
  ];

  function Testimonials() {
    return (
      <section className="container-fluid mt-5 bgnTestimonialsImage">
      <div className="container my-5 testimonials">
      <h1>What Diners Love About Us</h1>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  width={100}
                  className="rounded-circle mb-3"
                />
                <h5 className="card-title">{review.name}</h5>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <p className="card-text">"{review.text}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    );
  }

  export default Testimonials;