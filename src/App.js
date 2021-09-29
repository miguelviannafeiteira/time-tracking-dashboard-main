import React from 'react';
import foto from './images/image-jeremy.png';
import './App.css';
import Tempos from './Tempos';

const App = () => {
  const [tempo, setTempo] = React.useState(null);

  function handleClick(event) {
    setTempo(event.target.innerText);

    const link = document.querySelectorAll('a');
    if (link.hasOwnProperty('active')) {
      link.classList.remove('active');
    }
    console.log(link);
    event.target.classList.add('active');
  }

  return (
    <div className="bg">
      <div className="container">
        <div className="ladoEsquerdo">
          <div className="info">
            <img src={foto} alt="" />
            <div className="pessoal">
              <p>Report for</p>
              <h1>
                Jeremy <br />
                Robson
              </h1>
            </div>
          </div>
          <div className="links">
            <a className="link" href="#" onClick={handleClick}>
              daily
            </a>
            <a className="link" href="#" onClick={handleClick}>
              weekly
            </a>
            <a className="link" href="#" onClick={handleClick}>
              monthly
            </a>
          </div>
        </div>
        <h1 className="titulo">{tempo}</h1>

        <Tempos tempo={tempo} />
      </div>
    </div>
  );
};

export default App;
