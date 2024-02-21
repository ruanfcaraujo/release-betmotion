const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';  // Substitua pelo caminho correto

module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chrome') {
      launchOptions.executablePath = chromePath;
    }
    return launchOptions;
  });
};
module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.family === 'chrome') {
        launchOptions.args.push('--disable-extensions');
        launchOptions.args.push('--disable-web-security');
        launchOptions.args.push('--no-sandbox');
        launchOptions.args.push('--disable-site-isolation-trials');
        launchOptions.args.push('--headless');  // Se você desejar execução headless
      }
      return launchOptions;
    });
  };
  
