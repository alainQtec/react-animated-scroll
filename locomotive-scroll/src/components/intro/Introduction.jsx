import image from "../../assets/profile.png";
import "./intro-style.css";

const Introduction = () => {
  return (
    <section
      className="intro-section"
      data-scroll-section
      data-scroll
      data-scroll-speed="6"
    >
      <div className="intro-image">
        <img src={image} height={700} alt="profile" />
      </div>
      <div className="intro-title">
        <h1 data-scroll data-scroll-speed="9">
          I am Naruto Uzumaki
          <br />
          Don't underestimate me! I don't quit and I do't run! You can act tough
          all you want! You're not gonna scare me off! No way! I don't care if I
          do get stuck as a Genin for the rest of my life! I'll still be Hokage
          someday.
        </h1>
      </div>
    </section>
  );
};

export default Introduction;
