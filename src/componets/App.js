import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setnumberOfErrors] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [word, setword] = useState('pepino');
  const [userLetters, setuserLetters] = useState([]);

  const renderSolutionLetters = (ev) => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      return <li key={index} className="letter"></li>;
    });
  };

  const handleChangeInput = (ev) => {
    ev.preventDefault();
    //   const value = ev.currentTarget.value;
    //   console.log(value);
    //   let regex = /[a-zA-Z\s]/;

    //   if (regex.test(value)) {
    //      setlastLetter(ev.currentTarget.value);
    //    } else {
    //     console.log('es numero');
    //   }
    setuserLetters.push(lastLetter);
  };

  const handleChangeLastLetter = (ev) => {
    ev.preventDefault();
    setlastLetter(ev.currentTarget.value);
  };

  const handleClickbtn = (ev) => {
    ev.preventDefault();
    setnumberOfErrors(numberOfErrors + 1);
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              // onChange={handleChangeLastLetter}
              onChange={handleChangeInput}
            />
            <button onClick={handleClickbtn}>Incremetar</button>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
