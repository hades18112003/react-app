import React from 'react';
import './App.css';

function App() {
  const countries = [
    {
      name: 'India',
      description: 'Explore the rich cultural heritage and diverse landscapes of India.',
      image: 'https://i.pinimg.com/564x/66/d3/38/66d338fef554fe0e86cf38ac57745d22.jpg',
    },
    {
      name: 'Nepal',
      description: 'Discover the majestic Himalayas and ancient temples of Nepal.',
      image: 'https://i.pinimg.com/564x/61/bf/f0/61bff0a1f0851a2e1b5a771a7cd05847.jpg',
    },
    {
      name: 'Sri Lanka',
      description: 'Experience the beautiful beaches and historical sites of Sri Lanka.',
      image: 'https://i.pinimg.com/564x/3f/07/ce/3f07cee5c324722832c24068ae91fa34.jpg',
    },
    {
      name: 'Pakistan',
      description: 'Visit the stunning mountains and vibrant cities of Pakistan.',
      image: 'https://i.pinimg.com/564x/75/9e/7b/759e7b30e2496413374be6abe0ece046.jpg',
    },
  ];

  return (
      <div className="App">
        <div className="Navbar">
          <nav>
            <ul>
              <li>
               <a href="test.html">Sign Up</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Main</a>
              </li>
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="quiz.html">Quiz</a> 
              </li>
              <li>
                <a href="Survey.html">Survey</a>
              </li>
              <li>
              <a href="feedback.html">Feedback</a>
              </li>
            </ul>
          </nav>
        </div>
      <h1>Welcome to South Asian Tourism</h1>
        <div className="countries">
          {countries.map((country, index) => (
            <div key={index} className="country">
                <img src={country.image} alt={country.name}/>
                <h2>{country.name}</h2>
                <p>{country.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default App;
