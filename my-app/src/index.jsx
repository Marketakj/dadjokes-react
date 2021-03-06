import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from ('Joke');

const likes = () => {
  upLikes = +1;
};

const dislikes = () => {
  downLikes = +1;
};

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <div class="container">
        <div class="joke">
          <div class="joke__body">
            <div class="joke__user">
              <img
                class="user-avatar"
                src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              />
              <p class="user-name">Neroxx</p>
            </div>

            <p class="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div class="joke__likes">
            <button
              onClick={likes}
              id="btn-up"
              class="btn-like btn-like--up"
            ></button>
            <span id="likes-up" class="likes-count likes-count--up">
              0
            </span>
            <button
              onClick={dislikes}
              id="btn-down"
              class="btn-like btn-like--down"
            ></button>
            <span id="likes-down" class="likes-count likes-count--down">
              0
            </span>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
