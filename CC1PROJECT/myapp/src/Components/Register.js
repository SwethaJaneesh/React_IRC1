import '../Assets/Css/reg.css';

const Register=()=>
{
    return(
      <>
      <div>
     
      <div class="register-page">
  <div class="register-header">
    <h2>Register</h2>
  </div>
  <form class="register-form"/>
    <div class="register-name">
      <div>
      {/* <label>First name</label> */}
      <input type="text" name="firstName" placeholder="FirstName" autofocus/>
    </div>
    <div>
      {/* <label>Last name</label> */}
      <input type="text" placeholder="LastName" name="lastName"/>
    </div>
    </div>
    <div>
      {/* <label>Email ID</label> */}
      <input type="text" placeholder="Email" name="emailID"/>
    </div>
    <div>
      {/* <label>Phone number</label> */}
      <input type="text" placeholder="phonenumber" name="phoneNumber"/>
    </div>
    <div>
      {/* <label>Address</label> */}
      <div class="register-address">
        <input class="register-address-line" type="text" placeholder="Address" name="address"/>
        <input class="register-address-city" type="text" placeholder="city" name="city"/>
        <input class="register-address-pincode" type="text" placeholder="pincode" name="pincode"/>
      </div>
    </div>
    <div>
      {/* <label>Password</label> */}
      <input type="password" placeholder="Password" name="password"/>
    </div>
    <div>
      {/* <label>Retype Password</label> */}
      <input type="password" placeholder="Retype password" name="passworkCheck"/>
    </div>
    <div>
      <button class="register-button" value="submit">Sign up</button>
    </div>
  <form/>
</div> 



      </div>
      </>
    )
}
export default Register;