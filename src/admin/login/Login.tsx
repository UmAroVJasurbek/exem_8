// export default Login;
import { useState } from "react";
import "./Login.scss";
import { HiMiniPencil } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Checking if email and password are provided
    if (!email || !password) {
      alert("Please provide email and password.");
      return;
    }

    // Retrieve user credentials from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if provided credentials match with stored credentials
    if (email === storedEmail && password === storedPassword) {
      // If credentials match, navigate to the home page
      navigate("/");
    } else {
      // If credentials do not match, show an alert or handle error accordingly
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="login">
        <img className="login_logo" src="images/EBay_logo.png" alt="" />
        <p>
          Already a member? <span className="login_text_span">Sign in</span>
        </p>
      </div>{" "}
      <div className="login_container">
        <div className="login_text">
          <h1>Hello</h1>
          <p>
            Sign in to eBay or <span>create an account</span>
          </p>
        </div>
        <div className="login_form">
          <input
            className="header_input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="header_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_form_button" onClick={handleLogin}>
            Continue
          </button>
        </div>
        <div className="login_text_about">
          <span>
            <input type="checkbox" placeholder=" " />
            Stay signed in
          </span>
          <span> Using a public or shared device?</span>
          <span>Uncheck to protect your account.</span>
          <a className="login_text_about_a" href="#">
            Learn more
            <HiMiniPencil className="login_text_about_icon" />
          </a>
          <p className="login_text_about_p">
            With this box checked, we'll keep you signed in, making it easier to
            bid and buy. You'll also be all set to pay if you've saved your
            payment info. You can always turn off this feature in My eBay. We
            may ask you to sign in again for some activities, such as making
            changes to your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
