import React from 'react';
import Slider from 'react-slick';
import './ClientsCarousel.css'; // Import custom CSS

export default function ClientsCarousel() {
  // Replace with your client logo image paths and alt texts.
  const logos = [
    { src: '/public/SKOON LOGO_.png', alt: 'Client 1' },
    { src: '/public/marina b.png', alt: 'Client 2' },
    { src: '/public/HADDAD.png', alt: 'Client 3' },
    { src: '/public/DARWISH.png', alt: 'Client 4' },
    { src: '/public/chef hanna.png', alt: 'Client 5' },
    { src: '/public/EASY RENT.png', alt: 'Client 5' },
    { src: '/public/ELITE.png', alt: 'Client 5' },
    { src: '/public/EXPO ADONIS.png', alt: 'Client 5' },
    { src: '/public/GEMAN LINE.png', alt: 'Client 5' },
    { src: '/public/goat.png', alt: 'Client 5' },
    { src: '/public/ITAD.png', alt: 'Client 5' },
    { src: '/public/LOGO Moverz-01.png', alt: 'Client 5' },
    { src: '/public/PARI ROYAL.png', alt: 'Client 5' },
    { src: '/public/pro cream.png', alt: 'Client 5' },
    { src: '/public/RIO.png', alt: 'Client 5' },
    { src: '/public/TIO.png', alt: 'Client 5' },
    { src: '/public/u-feed.png', alt: 'Client 5' },
    { src: '/public/vintage closet.png', alt: 'Client 5' },
    { src: '/public/ Master Cabin.png', alt: 'Client 5' },
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
      {/* <h2 style={{color:"#fff", marginBottom: "10%"}}>Our Clients</h2> */}
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
