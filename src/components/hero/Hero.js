import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import heroImg from "../../assets/phone.svg";
import "./hero.css";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="hero" data-theme={theme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Digital Shop, Physically Located in the Heart of Abuja!</h1>
          <p>
            It takes real to know real. An we believe everyone is real. At our
            store you can be sure to find authentic products to meet your daily
            as well as luxurious need. Looking forward to seeing you today.
            Cheers!
          </p>
          <div className="--flex-start">
            <button className="--btn btn-video">Watch Video</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className="--text-center">
          <img src={heroImg} alt="hero" width={180} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
