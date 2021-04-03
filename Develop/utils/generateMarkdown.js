function generateMarkdown(responses) {
  return `
# [${responses.title}](${responses.repoURL})

${responses.license === "Apache" ? "![Badge](https://img.shields.io/badge/license-Apache%202.0-f56b02)" : 	
  responses.license === "CC"     ? "![Badge](https://img.shields.io/badge/license-CC-f2ea05)" : 	
  responses.license === "GPLv3"  ? "![Badge](https://img.shields.io/badge/license-GPL%20v3-40e637)" : 	
  responses.license === "GPLv2"  ? "![Badge](https://img.shields.io/badge/license-GPL%20v2-0526fc)" : 	
  responses.license === "ISC"    ? "![Badge](https://img.shields.io/badge/license-ISC-850fd4)" : 	
  responses.license === "MIT"    ? "![Badge](https://img.shields.io/badge/license-MIT-f2056c)" : 	
  responses.license === "WTFPL"  ? "![Badge](https://img.shields.io/badge/license-WTFPL-f20707)" : ""}

## Description
${responses.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation 👨🏽‍💻 <a name="installation"></a>
${responses.installation}

## Usage <a name="usage"></a>
${responses.usage}

## Contributing <a name="contributing"></a>
${responses.contributing}

## Tests <a name="tests"></a>
${responses.tests}


## Questions <a name="questions"></a>

* If you have any questions please [**eMail**](mailto:${responses.email}) me
* :octocat: Check out more of my work on [**GitHub**](${responses.username})


## License 📝 <a name="license"></a>

This project is ${responses.license === "Apache" ? "**`Apache 2.0`**" : 
                  responses.license === "CC"     ? "**`Creative Commons`**"  :  
                  responses.license === "GPLv3"  ? "**`General Public License v3.0`**"  : 	
                  responses.license === "GPLv2"  ? "**`General Public License v2.0`**"  : 	
                  responses.license === "ISC"    ? "**`Internet Systems Consortium`**"  : 	
                  responses.license === "MIT"    ? "**`Massachusetts Institute of Technology`**"  : 	
                  responses.license === "WTFPL"  ? "**`WTFPL`**"  : "Not"} licensed
---
 Copyright ©️ ${responses.year}  ${responses.name}
`;
}

module.exports = generateMarkdown;