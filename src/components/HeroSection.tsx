import "./styles/HeroSection.css";
import Mobile from "./Mobile";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build apps with <span>Logicodeum IDE</span>, powered by Logic Editor
        </h1>

        <p>
          A powerful platform that helps developers and students to design, build, and deploy applications effortlessly.Build your apps on device,no server dependency.comming soon...</p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
      <Mobile/>
    </section>
  );
};
