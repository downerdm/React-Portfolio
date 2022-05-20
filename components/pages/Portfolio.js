import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div class="card flexcard">
      <div class="card-body">
          <h5 class="card-title">Find-A-Doc</h5>
      </div>
      <div>
          <img class="card-img-top" src="./assets/images/FindADoc.png" alt="FindADoc Project Image">
          <a href="https://find-a-doc.herokuapp.com/login" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/jorross/FindADoc" class="card-link cardLinkCustom">GitHub Repo</a>
      </div>
    </div>

     <div class="card flexcard">
      <div class="card-body">
          <h5 class="card-title">Reddit Data Dive</h5>
      </div>
      <div>
          <img class="card-img-top" src="./assets/images/RedditDataDive.png" alt="Reddit Project Image">
          <a href="https://downerdm.github.io/reddit-data-dive_dmd/" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/AmyWilhoite/reddit-data-dive" class="card-link cardLinkCustom">GitHub Repo</a>
      </div>
    </div>
  
    <div class="card flexcard">
      <div class="card-body">
          <h5 class="card-title">Day Planner</h5>
       </div>
       <div>
          <img class="card-img-top" src="./assets/images/DayPlanner.png" alt="Dayplanner Image">
          <a href="https://downerdm.github.io/workday-planner/" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/downerdm/workday-planner" class="card-link cardLinkCustom">GitHub Repo</a>
       </div>
      </div>
      
      <div class="card flexcard">
        <div class="card-body">
          <h5 class="card-title">5-Day Weather Forecast</h5>
        </div>
        <div>
          <img class="card-img-top" src="./assets/images/5DayWeather.png" alt="Weather Project Image">
          <a href="https://downerdm.github.io/weather-dashboard/" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/downerdm/weather-dashboard" class="card-link cardLinkCustom">GitHub Repo</a>
        </div>
      </div>

      <div class="card flexcard">
        <div class="card-body">
          <h5 class="card-title">Password Generator</h5>
        </div>
        <div>
          <img class="card-img-top" src="./assets/images/PwdGen_DMD.png" alt="Password Generator Image">
          <a href="https://downerdm.github.io/password-generator/" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/downerdm/password-generator" class="card-link cardLinkCustom">GitHub Repo</a>
        </div>
      </div>

      <div class="card flexcard">
        <div class="card-body">
          <h5 class="card-title">Regex Gist</h5>
        </div>
        <div>
          <img class="card-img-top" src="./assets/images/RegExGist_DMD.png" alt="RegEx Gist Image">
          <a href="https://gist.github.com/downerdm/54d4c68fcd30caeb2639f0f8c514b431" class="card-link cardLinkCustom">GitHub Gist</a>
        </div>
      </div>
    </div>
  );
}
