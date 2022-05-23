import React from 'react';
import ResumePdf from '../../assets/files/DownerResume_2022.pdf'
import '../../assets/css/style.css'

export default function Resume() {
  return (
    <body>
    <div>
      <h1>Resume Page</h1>
      <p>Click here to download my resume</p>
      <h3>Certifications</h3>
        <h4>Currently enrolled in the Georgia Tech Coding Boot Camp</h4>
          <p class="technology">
          <span>Browser-Based Technologies: </span>HTML, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, Progressive Web Applications (PWAs), React.js
          </p>
          <p class="technology">
            <span>API Design: </span>Client-Server Model, API, REST, JSON, AJAX
          </p>
          <p class="technology">
            <span>Databases: </span>MySQL, MongoDB
          </p>
          <p class="technology">
            <span>Deployment & Delivery: </span>Heroku, Git, GitHub
          </p>
        <h3>Multilingual World Language Teacher</h3>
        <h4>Education</h4>
        <ul class="education">
          <li>
          <strong>Master of Education in Latin</strong>  <em>University of North Carolina</em> Greensboro in Greensboro, NC
          </li>
          <li>
          <strong>Master of Arts</strong>  <em>Elliott School of International Affairs, George Washington University</em> in Washington, DC 
           </li>
           <li>
            <strong>Bachelor of Arts</strong>	<em>George Washington University</em> in Washington, DC  (Summa cum laude)
            </li>
        </ul>
        <h4>Work Experience</h4>
        <ul class="education">
          <li>
          <strong>Shiloh Middle School</strong>  <em>Snellville, GA</em> 2020-Present
          </li>
          <li>
          <strong>Berkmar High School</strong>  <em>Lilburn, GA</em> 2015-2020
           </li>
          <strong>Peachtree Middle School</strong>	<em>Dunwoody, GA</em> 2004-2015
        </ul>
    </div>
    </body>
  );
}
