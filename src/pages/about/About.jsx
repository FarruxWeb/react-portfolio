import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import "./about.css";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        excepturi, dolore numquam minus repudiandae ullam voluptatum quod
        explicabo animi aliquam!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              culpa molestiae ullam nulla consequatur nihil aliquid quos veniam
              voluptatem doloremque ad itaque perferendis id eveniet amet hic,
              veritatis molestias. Corrupti, similique nesciunt? Assumenda
              praesentium laudantium quis? Nostrum adipisci non maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium perferendis harum, ab repellendus nihil perspiciatis
              iure nam alias aut omnis aperiam tenetur soluta officia similique
              vitae eius quasi dolores ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad
              amet quibusdam, laborum quis eius sed. Nesciunt repellat quod
              temporibus!
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              culpa molestiae ullam nulla consequatur nihil aliquid quos veniam
              voluptatem doloremque ad itaque perferendis id eveniet amet hic,
              veritatis molestias. Corrupti, similique nesciunt? Assumenda
              praesentium laudantium quis? Nostrum adipisci non maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium perferendis harum, ab repellendus nihil perspiciatis
              iure nam alias aut omnis aperiam tenetur soluta officia similique
              vitae eius quasi dolores ipsam!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              culpa molestiae ullam nulla consequatur nihil aliquid quos veniam
              voluptatem doloremque ad itaque perferendis id eveniet amet hic,
              veritatis molestias. Corrupti, similique nesciunt? Assumenda
              praesentium laudantium quis? Nostrum adipisci non maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium perferendis harum, ab repellendus nihil perspiciatis
              iure nam alias aut omnis aperiam tenetur soluta officia similique
              vitae eius quasi dolores ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad
              amet quibusdam, laborum quis eius sed. Nesciunt repellat quod
              temporibus!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
