export const css = `
  html[data-appy-app] {
    
    input[type="text"],
    input[type="number"],
    textarea {
      font-size: 16px;
    }

    [data-appy-hide] {
      display: none;
    }

    body {
      padding-top: 0;
    }

    header {
      display: none;
    }

    a {
      -webkit-touch-callout: none; // disable preview on iOS
      user-select: none; 
    }
  }
`;
