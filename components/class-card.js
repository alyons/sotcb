import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  GridListTile,
  GridListTileBar
} from '@material-ui/core';

export default function ClassCard(props) {
  let {
    id,
    title,
    image
  } = props;

  return (
    <Link href={`/classes/${id}`}>
      <GridListTile style={{ height: '100px' }}>
        <Image src={`/images/${image}`} alt={title} layout="fill" />
        <GridListTileBar
          title={title}
        />
      </GridListTile>
    </Link>
  )

}