export const css = `
  html[data-appy-app] {
    input, select, textarea {
      font-size: 16px !important;
    }

    [data-appy-hide] {
      display: none;
    }

    a {
      -webkit-touch-callout: none; // disable preview on iOS
      user-select: none; 
    }

    
    /**
     * Salt & Pepper specific styles 
     **/

    body:not(.constant-header-with-fixed-breadcrumb) {
      padding-top: 0;
    }

    header:not(#root-header) {
      display: none;
    }
    
    .leftSide-rGi3e {
      display: none;
    }
    
    .centered-ZBh68 {
      display: none;
    }
    
    #breadcrumb-container {
      display: none;}
    }
    
    #back-top {
      display: none !important;
    }
  }
`;
