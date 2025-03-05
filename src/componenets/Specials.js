import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import greek_salad from '../images/greek-salad.jpg';
import bruschetta from '../images/bruchetta.jpg';
import lemon_desert from '../images/lemon-dessert.jpg';
import salmon from '../images/salmon.jpg';
import chicken from '../images/chicken.jpg';
import burger from '../images/burger.jpg';
import pasta from '../images/pasta.jpg';
import pankaces from '../images/pankaces.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const specialsData = [
  {
    title: "Greek Salad",
    image: greek_salad,
    description: "Crispy lettuce, peppers, olives, feta cheese, garlic croutons.",
    price: "$12.99"
  },
  {
    title: "Bruschetta",
    image: bruschetta,
    description: "Grilled bread with garlic, salt, and olive oil.",
    price: "$9.99"
  },
  {
    title: "Lemony Salmon",
    image: salmon,
    description: "Authentic recipe with fresh ingredients.",
    price: "$20.00"
  },
  {
    title: "Lemon Dessert",
    image: lemon_desert,
    description: "Authentic recipe with fresh ingredients.",
    price: "$7.00"
  },
  {
    title: "Chicken Parmesan",
    image: chicken,
    description: "Crispy breaded chicken with marinara sauce and melted mozzarella.",
    price: "$18.99"
  },
  {
    title: "Shrimp Pasta",
    image: pasta,
    description: "Garlic butter shrimp with creamy Alfredo sauce over linguine.",
    price: "$22.99"
  },
  {
    title: "Pankaces",
    image: pankaces,
    description: "Wood-fired pizza with bell peppers, olives, onions, and fresh basil.",
    price: "$9.99"
  },
  {
    title: "Burger",
    image: burger,
    description: "Grilled steak with crispy golden fries and garlic herb butter.",
    price: "$24.99"
  }

];




const Specials = () => {
  return (

    <section className="container-fluid">
      <div className="specials">
        <h1>Today's Featured Dishes</h1>
        <div className="header-menu-button">
          <Link to="/menu" className="menu-button">Online Menu</Link>
        </div>


        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {specialsData.map((item, index) => (
                <div key={index} className="">
                  <div className="slider text-center">
                    <img src={item.image} alt={item.title} className="zoom-effect" />
                    <div className="special-item">
                    <h3 className='mt-3'>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                    <p className="price">{item.price}</p>
                    
                    <button type="button" className="btn btn-outline-primary mt-3">
                      Order a delivery
                    </button>
                    
                  </div>
                </div>
            ))}

          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default Specials;




