import React from 'react';
import './home.css'

function Home() {
  return (
    <body>

      <section class="page-section cta">
        <div class="cta-outer">
          <div class="cta-inner">
            <h2 class="section-heading">
              The Avengers is togetherness.
            </h2>
            <p>The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City. Since then, the team has expanded its roster and faced a host of new threats, while dealing with their own turmoil. Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe.</p>
          </div>
        </div>
      </section>


      <div className='slider-container'>
        <div class="imagemenu">
          <label for="slide-dot-1"></label>
          <label for="slide-dot-2"></label>
          <label for="slide-dot-3"></label>
        </div>
        <input id="slide-dot-1" type="radio" name="slides" checked/>
        <div class="slide slide-1"></div>

        <input id="slide-dot-2" type="radio" name="slides" />
        <div class="slide slide-2"></div>

        <input id="slide-dot-3" type="radio" name="slides" />
        <div class="slide slide-3"></div>
      </div>
    </body>
  );
}

export default Home