import React from 'react';
import emailEmoji from "../assets/images/email_emoji.png";

// function emailBtn {
//   return 
// }
export default function Footer() {
  return (
    // <div>
    // <ul>
    //   <span>
    //   <img src= "📧" alt="Email emoji>
    //   </span>
    //   <li>Email:
    //   <a href="mailto:downerdm@gmail.com">downerdm@gmail.com</a>
      
    //   <a href="#" class="fa fa-linkedin"></a>
    //   </li>
    //   <li>LinkedIn:
    //   <a href="https://www.linkedin.com/in/downerdm">Dennis Downer</a>
    //   </li>
    //   <a href="#" class="fa fa-instagram"></a>
    //   <li>Instagram:
    //   <a href="https://www.instagram.com/">downerdm2</a>
    //   </li>
    //   <li>Github:
    //     <a href="https://github.com/downerdm">downerdm</a>
    //   </li>
    // </ul>
    //   </div>
    <div class="container my-5">

    <footer class="text-center text-lg-start">
      <div class="container d-flex justify-content-center py-5">
        <button type="button" id="emailBtn" class="btn btn-primary btn-lg btn-floating mx-2">
          <img src={emailEmoji} />
          <a href="mailto:downerdm@gmail.com" />
        </button>
        <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
          <i class="fab fa-github"></i>
        </button>
        <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
          <i class="fab fa-instagram"></i>
        </button>
      </div>
  
      <div class="text-center p-3">
        © 2022 Copyright: Dennis M. Downer
      </div>
    </footer>
    
  </div>)
}
