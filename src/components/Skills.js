// Skills.js
import { useState } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skillDetails = {
    Frontend: `HTML5, CSS3 (strong grasp of styling, animations, layouts)
JavaScript basics (can expand to frameworks later)
EJS templating engine
Responsive design & UI effects (like hover glow, scroll-based interaction)`,

    Backend: `Node.js with Express
RESTful API creation
JWT authentication
File handling with fs, image uploads
Argon2 password hashing for security`,

    Database: `- MySQL / SQL queries
CRUD operations
Joined tables, foreign keys, relational data management
- Mongoose (MongoDB):MongoDB document structure & schema design ,CRUD operations for MongoDB. Data relationships (embedding vs. referencing)
Handling complex queries and population in Mongoose ,Integrating MongoDB with Express (via Mongoose ORM)`,

    "Game Development": `Unity (C#):
- Car controller scripts (custom physics, boost feature, AI navigation using NavMesh)
- Gesture-based control with Python integration
- Creating mini-games and mechanics
- Asset management and UI design in Unity

Python (for AI/LLM integration):
- Backend logic for game or web support
- Image or gesture recognition (possibly with OpenCV or TensorFlow)
- Communication with Unity via sockets or APIs`,

    "Soft Skills": `Problem-solving and debugging
Willingness to iterate and improve UI/UX
Self-driven learner
Combines logic with creative design`
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>🔧 Technical Skills<br /></p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item" onClick={() => setSelectedSkill("Frontend")}>
                  <img src={meter1} alt="Frontend" />
                  <h5>Frontend</h5>
                </div>
                <div className="item" onClick={() => setSelectedSkill("Backend")}>
                  <img src={meter2} alt="Backend" />
                  <h5>Backend</h5>
                </div>
                <div className="item" onClick={() => setSelectedSkill("Database")}>
                  <img src={meter3} alt="Database" />
                  <h5>Database</h5>
                </div>
                <div className="item" onClick={() => setSelectedSkill("Game Development")}>
                  <img src={meter1} alt="Game Dev" />
                  <h5>Game Development</h5>
                </div>
                <div className="item" onClick={() => setSelectedSkill("Soft Skills")}>
                  <img src={meter2} alt="Soft Skills" />
                  <h5>Soft Skills</h5>
                </div>
              </Carousel>

              {selectedSkill && (
                <div className="skill-detail-box">
                  <h3>{selectedSkill} Details</h3>
                  <pre>{skillDetails[selectedSkill]}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decor" />
    </section>
  );
};
