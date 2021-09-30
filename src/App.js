import React from 'react';
import foto from './images/image-jeremy.png';
import './App.css';
import Tempos from './Tempos';
import cn from 'clsx';

const App = () => {
  const [tempo, setTempo] = React.useState(null);
  const [active, setActive] = React.useState(null);

  function handleClick(tempo) {
    setTempo(tempo);
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
            <a
              className={cn('link', { active: tempo === 'daily' })}
              href="#"
              onClick={() => handleClick('daily')}
            >
              daily
            </a>
            <a
              className={cn('link', { active: tempo === 'weekly' })}
              href="#"
              onClick={() => handleClick('weekly')}
            >
              weekly
            </a>
            <a
              className={cn('link', { active: tempo === 'monthly' })}
              href="#"
              onClick={() => handleClick('monthly')}
            >
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
