import profil from "../images/profil.jpg";
const Nav = () => {
  return (
    <div className="nav-container">
      {/* ----- photo de profil--------- */}
      <div className="profil-pic">
        <div>
          <img src={profil} />
        </div>
        <div>Dante</div>
      </div>

      {/* ----- Navigation--------- */}
      <nav>
        <div>About</div>
        <div>Work</div>
        <div>Contact</div>
      </nav>
    </div>
  );
};

export default Nav;
