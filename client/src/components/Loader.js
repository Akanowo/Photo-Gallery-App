import React from "react";

import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 25vh auto 2.5rem;
  border-color: red;
`;

function Loader() {
  return (
    <main className='loader'>
      <FadeLoader
        color='rgba(238, 12, 80, 0.856)'
        height='25px'
        margin='16px'
        css={override}
      />
      <h1>Fetching photos</h1>
    </main>
  );
}

export default Loader;
