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
      overflow-x: hidden;
    }

    #root {
      height: 100vh;
      height: var(--vh);
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