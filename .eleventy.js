module.exports = function(config) {
    let markdownIt = require("markdown-it");
    let options = {
      html: true,
      breaks: true,
      linkify: true
    };
    config.setLibrary('md', markdownIt(options));  
    
    return {
        dir: {
            input: 'src/pages',
            includes: 'includes' 
        }
    }
}