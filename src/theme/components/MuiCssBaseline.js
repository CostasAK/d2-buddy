export const MuiCssBaseline = {
  styleOverrides: `
    @font-face {
      font-family: "Destiny_Keys";
      src: url("https://cdn.jsdelivr.net/gh/nathanrsxtn/Destiny-2-Font-Symbols@e4cef44cb28f51545e4bc5e7924c97247e4a3c88/fonts/Destiny_Keys.otf");
      font-display: swap;
    }

    *, ::before, ::after {
      max-width: 100%;
    }

    * {
      scrollbar-width: thin;
      scrollbar-color: white rgba(127, 127, 127, 0.5);
    }

    *::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    *::-webkit-scrollbar-track {
      background-color: rgba(127, 127, 127, 0.5);
    }

    *::-webkit-scrollbar-thumb {
      background-color: white;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    body {
      max-width: 100vw;
      text-rendering: optimizeLegibility;
      hyphen: auto;
      overflow-x: hidden;
    }

    #root {
      height: 100vh;
      height: var(--vh);
    }

    img,
    picture {
      display: block;
      content-visibility: auto;
    }

    img[src$=".gif"],
    img[src$=".png"],
    img[src$=".jpg"],
    img[src$=".jpeg"] {
      image-rendering: -webkit-optimize-contrast;
    }

    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `,
  "@global": {
    "*": {
      "scrollbar-width": "thin",
    },
    "*::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },
  },
};
