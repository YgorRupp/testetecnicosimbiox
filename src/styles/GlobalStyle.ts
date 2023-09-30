import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --color-black: #000000;
        --color-gray-100: #23252b;

    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
	    line-height: 1;
        font-family: 'Poppins', sans-serif;
    }

`;
