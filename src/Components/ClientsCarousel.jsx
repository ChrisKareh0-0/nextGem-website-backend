import React from 'react';
import Slider from 'react-slick';
import './ClientsCarousel.css'; // Import custom CSS

export default function ClientsCarousel() {
  // Replace with your client logo image paths and alt texts.
  const logos = [
    { src: '/logos/client1.png', alt: 'Client 1' },
    { src: '/logos/client2.png', alt: 'Client 2' },
    { src: '/logos/client3.png', alt: 'Client 3' },
    { src: '/logos/client4.png', alt: 'Client 4' },
    { src: '/logos/client5.png', alt: 'Client 5' },
    // Add more logos as needed.
  ];

  // Slider settings. Adjust slidesToShow, autoplaySpeed, etc. as needed.
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="clients-carousel">
      <h2>Our Clients</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="client-logo">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
