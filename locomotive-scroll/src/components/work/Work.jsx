import "./Work-style.css";
import Card from "../Card";

const Work = () => {
  return (
    <section id="case-stick" data-scroll-section className="work-section">
      <p
        className="case"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#case-stick"
      >
        Quotes
      </p>

      <Card
        image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        title="My ninja way"
        description="I won't run away anymore. I won't go back on my word. That is my ninja way!"
      />
      <Card
        image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        title="Believe in yourself"
        description="Hard work is worthless for those that don't believe in themselves."
      />
      <Card
        image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        title="You're not a failure"
        description="So shut up about destiny and how people can't change! Because unlike me, you're not a failure."
      />
    </section>
  );
};

export default Work;
