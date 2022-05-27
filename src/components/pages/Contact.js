import React from 'react';
import '../../assets/css/style.css';

export default function Contact() {
  return (
    <body>
    <div>
      <h2>Contact Me</h2>
      <div>
      <form>
      <div class="form-group row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email"  />
  </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
    </div>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </form>
     
    
      </div>
    </div>
    </body>
  );
}
