import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Toolbar
} from '@material-ui/core';
import Link from 'next/link';


function Header({ props }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonId, setButtonId] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setButtonId(event.currentTarget.id);
  };

  const closeMenu = (event) => {
    setAnchorEl(null);
    setButtonId(null);
  };

  return (
    <Toolbar>
      <Link href="/"><Button>Home</Button></Link>
      <Button id="compendium-button" aria-controls="compendium-menu" aria-haspopup="true" onClick={openMenu}>
        Compendium
      </Button>
      <Menu id="compendium-menu" anchorEl={anchorEl} keepMounted open={Boolean(buttonId == "compendium-button")} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>
          <Link href="/classes">Classes</Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link href="/">Jobs</Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link href="/">Races</Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link href="/">Traits</Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link href="/">Equipment</Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link href="/">Magic</Link>
        </MenuItem>
      </Menu>
      <Link href="/books"><Button>Rules</Button></Link>
      <Button id="tool-button" aria-controls="tool-menu" aria-haspopup="true" onClick={openMenu}>
        Tools
      </Button>
      <Menu id="tool-menu" anchorEl={anchorEl} keepMounted open={Boolean(buttonId == "tool-button")} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>
          <Link href="/monster-builder">Monster Builder</Link>
        </MenuItem>
      </Menu>
      <Button>Resources</Button>
      <Button>About</Button>
    </Toolbar>
  )
}

export default Header;
