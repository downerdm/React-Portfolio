import React from 'react';
import ResumePdf from '../../assets/files/DownerResume_2022.pdf'
import '../../assets/css/style.css'

export default function Resume() {
  return (
    <body>
    <div>
      <div>
      <h2>Resume</h2>
      <a href={ResumePdf}>(Click here to download my resume)</a>
      </div>
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
    </div>
    </body>
  );
}
