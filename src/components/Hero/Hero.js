import './Hero.css'

const Hero = ({ text }) => {
  return (
    <header>
      <div>
          <img className="bgimage" src="/webb-bg.jpg" alt="Background"/>
          <h1 className="h1">{text}</h1>
        <div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
