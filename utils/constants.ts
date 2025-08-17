const css = `
  html[data-appy-app] [data-appy-hide] {
    display: none;
  }
`;

const setupLogging = `
  const consoleLog = (level, message) => {
    const logMessage = JSON.stringify({
      'type': 'log',
      'data': {
        level, 
        message
      }
    });

    window.ReactNativeWebView.postMessage(logMessage);
  };

  console = {
    log: (log) => consoleLog('log', log),
    debug: (log) => consoleLog('debug', log),
    info: (log) => consoleLog('info', log),
    warn: (log) => consoleLog('warn', log),
    error: (log) => consoleLog('error', log),
  };
`;

export const injectedJs = `(function() {
  const html = document.documentElement;
  html.dataset.appyApp = '';

  ${setupLogging}
  
  document.addEventListener('DOMContentLoaded', () => {
    const head = document.head;
    const style = document.createElement('style');
    const css = document.createTextNode(\`${css}\`);
    style.appendChild(css);
    head.appendChild(style);
  });

  document.addEventListener('click', (e) => {    
    e.preventDefault();

    const target = e.target.closest('a');    
    
    if (!target) { return }

    const isModal = target.hasAttribute('data-appy-modal')

    window.ReactNativeWebView.postMessage(JSON.stringify({
      type: 'navigation',
      data: {
        isModal,
        href: target.href
      }
    }));

    return false;
  })
})();`;
