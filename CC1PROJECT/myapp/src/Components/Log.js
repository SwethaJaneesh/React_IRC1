import '../Assets/Css/log.css';
const Log=()=>
{
  return(
    <>
  <div className='flow'>
  <body>
  <div class="login-page">
   <div class="form">
    <div class="login">
      <div class="login-header">
        <h3>
          <i
            class="fa fa-lock"
            aria-hidden="true"></i>LOGIN
        </h3>
        <p></p>
      </div>
    </div>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>

   

</body>

</div>
    </>
  )
}
export default Log;