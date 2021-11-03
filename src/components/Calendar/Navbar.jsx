import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Avatar from "./Avatar";
function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="content">
          <nav class="navigation">
            <a class="navbar_logo" href="/">
              <Logo />
            </a>
            <div class="links">
              <a class="nav__link nav__link--active" href="/">
                Agenda
              </a>
              <a class="nav__link false" href="/Clienteel">
                Cliënteel
              </a>
              <a class="nav__link false" href="/Collegas">
                Collega's
              </a>
              <a class="nav__link" href="help">
                Help
              </a>
            </div>
          </nav>
          <div class="video_call_section">
            <Button text="Start videogesprek" />
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
