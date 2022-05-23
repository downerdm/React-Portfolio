import React from 'react';
import FindADoc from '../../assets/images/FindADoc.png';
import RedditDataDive from '../../assets/images/RedditDataDive.png';
import DayPlanner from '../../assets/images/DayPlanner.png';
import FiveDayWeather from '../../assets/images/5DayWeather.png';
import PasswordGenerator from '../../assets/images/PwdGen_DMD.png';
import RegExGist from '../../assets/images/RegExGist_DMD.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div class="card flexcard">
      <div class="card-body">
          <h5 class="card-title">Find-A-Doc</h5>
      </div>
      <div>
          <img src={FindADoc} alt="" />
          <a href="https://find-a-doc.herokuapp.com/login" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/jorross/FindADoc" class="card-link cardLinkCustom">GitHub Repo</a>
      </div>
    </div>

     <div class="card flexcard">
      <div class="card-body">
          <h5 class="card-title">Reddit Data Dive</h5>
      </div>
      <div>
        <img src={RedditDataDive} alt="" />
        <a href="https://downerdm.github.io/reddit-data-dive_dmd/" class="card-link cardLinkCustom">Deployed App</a>
        <a href="https://github.com/AmyWilhoite/reddit-data-dive" class="card-link cardLinkCustom">GitHub Repo</a>
      </div>
    </div>
  
    <div class="card flexcard">
      <div class="card-body">
          <h5 class="card-title">Day Planner</h5>
       </div>
       <div>
        <img src={DayPlanner} alt="" />
          <a href="https://downerdm.github.io/workday-planner/" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/downerdm/workday-planner" class="card-link cardLinkCustom">GitHub Repo</a>
       </div>
      </div>
      
      <div class="card flexcard">
        <div class="card-body">
          <h5 class="card-title">5-Day Weather Forecast</h5>
        </div>
        <div>
          <img src={FiveDayWeather} alt="" />
          <a href="https://downerdm.github.io/weather-dashboard/" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/downerdm/weather-dashboard" class="card-link cardLinkCustom">GitHub Repo</a>
        </div>
      </div>

      <div class="card flexcard">
        <div class="card-body">
          <h5 class="card-title">Password Generator</h5>
        </div>
        <div>
          <img src={PasswordGenerator} alt="" />
          <a href="https://downerdm.github.io/password-generator/" class="card-link cardLinkCustom">Deployed App</a>
          <a href="https://github.com/downerdm/password-generator" class="card-link cardLinkCustom">GitHub Repo</a>
        </div>
      </div>

      <div class="card flexcard">
        <div class="card-body">
          <h5 class="card-title">Regex Gist</h5>
        </div>
        <div>
          <img src={RegExGist} alt="" />
          <a href="https://gist.github.com/downerdm/54d4c68fcd30caeb2639f0f8c514b431" class="card-link cardLinkCustom">GitHub Gist</a>
        </div>
      </div>
    </div>
  );
}
