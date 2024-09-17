import Scroll from "./scroll";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <div className="title-box">
            <h1>I'm Samuel</h1>
            <h1>Céleste.</h1>
          </div>
          <div className="describe">
            Designer & Full Stack Developer, I craft innovative digital
            solutions that blend aesthetics and performance.
          </div>
        </div>
        <div className="projects">
          <div className="projects-section">Selected projects</div>
          <div className="projects-title">Perfect date</div>
          <div className="projects-title">Psychogenea</div>
          <div className="projects-title">Bel-Amis</div>
          <div className="projects-title">Archi</div>
        </div>
      </header>
      <Scroll />
    </div>
  );
};

export default Header;
