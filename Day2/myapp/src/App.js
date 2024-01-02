import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
    <div class="input-group">
        <div class="input-field" id="nameField">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Name"/>
        </div>
        <div class="input-field">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email"/>
        </div>
        <div class="input-field">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password"/>
        </div>
        <p>Lost Password <a href="#">Click Here!</a></p>
    </div>
    <div class="btn-field">
        <button type="button" id="signupBtn">Sign Up</button>
        <button type="button" id="signinBtn" class="disable">Sign In</button>
    </div>
</form>
</div>
</div>
  );
}

export default App;
