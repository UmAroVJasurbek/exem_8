// import React from "react";
// import "./Register.scss";

// import { HiMiniPencil } from "react-icons/hi2";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// const Register = () => {
//   return (
//     <div>
//       <div className="register">
//         <img className="register_logo" src="images/EBay_logo.png" alt="" />

//         <span className="register_text_span">Tell us what you think</span>
//       </div>{" "}
//       <div className="register_container">
//         <div className="register_text">
//           <h1>Create an account</h1>
//           <p></p>
//         </div>
//         <div className="register_form">
//           <input className="header_input" type="email" placeholder="Email" />
//           <span className="register_form_input">
//             <input
//               className="header_input"
//               type="password"
//               placeholder="Password"
//             />
//             <MdOutlineRemoveRedEye className="register_form_icon" />
//           </span>
//           <p className="register_form_p">
//             By Creating an account, you agree to our{" "}
//             <span className="register_form_span">User Agreement</span> and
//             acknowledge reading our{" "}
//             <span className="register_form_span">User Privacy Notice</span> .
//           </p>
//           <button> Create account</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please provide email and password.");
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
  };

  return (
    <div>
      <div className="register">
        <img className="register_logo" src="images/EBay_logo.png" alt="" />
        <span className="register_text_span">Tell us what you think</span>
      </div>
      <div className="register_container">
        <div className="register_text">
          <h1>Create an account</h1>
        </div>
        <div className="register_form">
          <input
            className="header_input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <span className="register_form_input">
            <input
              className="header_input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {/* You can add the "show password" feature here */}
          </span>
          <p className="register_form_p">
            By Creating an account, you agree to our{" "}
            <span className="register_form_span">User Agreement</span> and
            acknowledge reading our{" "}
            <span className="register_form_span">User Privacy Notice</span>.
          </p>
          <button className="login_form_button" onClick={handleRegister}>
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
