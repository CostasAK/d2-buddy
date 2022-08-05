import { baseTheme } from "theme/baseTheme";

export const MuiCssBaseline = {
  styleOverrides: `
    *, ::before, ::after {
      max-width: 100%;
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
    }

    #root {
      height: 100vh;
      height: var(--vh);
      overflow-y: auto;
      scrollbar-color: #f1f1f1 ${baseTheme.palette.appBar.main};
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 8px;
        background: ${baseTheme.palette.appBar.main};
      }

      &::-webkit-scrollbar-thumb {
        background: #f1f1f1;
      }
    }

    img,
    picture {
      display: block;
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
};
