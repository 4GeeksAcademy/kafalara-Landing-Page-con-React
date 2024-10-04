import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  const cardDescription = [
    { title: "4GeeksAcademy", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eu ipsum eget tristique", image: 'https://via.placeholder.com/500x325' },
    { title: "Uruguay", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eu ipsum eget tristique", image: 'https://via.placeholder.com/500x325' },
    { title: "Clase React", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eu ipsum eget tristique", image: 'https://via.placeholder.com/500x325' },
    { title: "React y Js", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eu ipsum eget tristique", image: 'https://via.placeholder.com/500x325' },
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container mt-5">
        <div className="row">
          {cardDescription.map((card, index) => (
            <div className="col-md-3 mb-" key={index}>
              <Card title={card.title} text={card.text} img={card.image} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
