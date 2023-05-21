export const MuiCssBaseline = {
  styleOverrides: `
    @font-face {
      font-family: "Destiny_Keys";
      src: url("https://cdn.jsdelivr.net/gh/nathanrsxtn/Destiny-2-Font-Symbols@1527dab2681664f614225219ab4907af437e2854/fonts/Destiny_Keys.otf");
      font-display: swap;
    }

    * {
      scrollbar-color: #232936 #181c25;
    }

    *::-webkit-scrollbar-track {
      background-color: #181c25;
      box-shadow: inset 0 0 5px #12171c;
    }

    *::-webkit-scrollbar-corner {
      background-color: #181c25;
      box-shadow: inset 0 0 5px #12171c;
    }

    *::-webkit-scrollbar-thumb {
      border: 1px solid #181c25;
      background: #232936;
      box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    }

    *::-webkit-scrollbar-thumb:hover {
      background: #262d3b;
    }

    *::-webkit-scrollbar {
      width: 1rem;
      height: 1rem;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    body {
      max-width: 100vw;
      text-rendering: optimizeLegibility;
      hyphen: auto;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      hyphens: auto;
      overflow-y: scroll;
    }

    p {
      max-width: min(100%, 80ch);
      hyphenate-limit-chars: 6 3 2;
    }

    a:-webkit-any-link {
      color: inherit;
      text-decoration: none;
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
