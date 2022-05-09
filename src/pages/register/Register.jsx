import './register.scss';

export default function Register() {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src="/assets/Netflix.png" alt="" className="logo" />
          <button className="loginButton">Sign in</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>
          Ready to watch? Enter your email to create or restart your membership
        </h2>
        Watch anywhere. Cancel anytime
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="input">
          <input type="email" placeholder="email" />
          <button className="registerButton">Get started</button>
        </div>
      </div>
    </div>
  );
}
