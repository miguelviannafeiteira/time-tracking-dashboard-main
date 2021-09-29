import React from 'react';

const Tempos = ({ tempo }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [tempo]);

  console.log(dados);

  if (dados === null) return null;
  return (
    <div>
      <ul className="lista">
        {tempo &&
          dados.map((item) => {
            return (
              <li key={item.title}>
                <div className={item.title}></div>
                <button>
                  <h3>{item.title}</h3>{' '}
                  <h1>{item.timeframes[tempo].current}hrs</h1>{' '}
                  <p>
                    Last {tempo} - {item.timeframes[tempo].previous}hrs
                  </p>
                </button>{' '}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default Tempos;
