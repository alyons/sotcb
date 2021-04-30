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



  return (
    <Toolbar>
      <Link href="/"><Button>Home</Button></Link>
      <Button>Rules</Button>
      <Button>Tools</Button>
      <Button>Resources</Button>
      <Button>About</Button>
    </Toolbar>
  )
}

export default Header;
