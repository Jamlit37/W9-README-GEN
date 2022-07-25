// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'GNU AGPL v3'  ) {
    return ('[![Licence badge](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]');
  }
  else if (license == 'GNU GPL v3') {
    return ('[![Licence badge](https://img.shields.io/badge/License-GPLv3-blue.svg)]');
  }
  else if (license == 'GNU LGPL v3') {
    return ('[![Licence badge](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]');
  }
  else if (license == 'Mozilla 2.0') {
    return ('[![Licence badge](https://img.shields.io/badge/license-Mozilla-green)]');
  }
  else if (license == 'Apache 2.0') {
    return ('[![Licence badge](https://img.shields.io/badge/license-Apache--2.0-blue)]');
  }
  else if (license == 'MIT') {
    return ('[![Licence badge](https://img.shields.io/badge/license-MIT-green)]');
  }
  else if (license == 'Boost 1.0') {
    return ('[![Licence badge](https://img.shields.io/badge/license-Boost-green)]');
  }
  else if (license == 'The Unlicense') {
    return ('[![Licence badge](https://img.shields.io/badge/license-Unlicense-blue)]');
  }
  else {
    return ('');
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'GNU AGPL v3') {
    return ('(https://choosealicense.com/licenses/agpl-3.0/)');
  }
  else if (license == 'GNU GPL v3') {
    return ('(https://choosealicense.com/licenses/gpl-3.0/)')
  }
  else if (license == 'GNU LGPL v3') {
    return ('(https://choosealicense.com/licenses/lgpl-3.0/)')
  }
  else if (license == 'Mozilla 2.0') {
    return ('(https://choosealicense.com/licenses/mpl-2.0/)');
  }
  else if (license == 'Apache 2.0') {
    return ('(https://choosealicense.com/licenses/apache-2.0/)');
  }
  else if (license == 'MIT') {
    return ('(https://choosealicense.com/licenses/mit/)');
  }
  else if (license == 'Boost 1.0') {
    return ('(https://choosealicense.com/licenses/bsl-1.0/)');
  }
  else if (license == 'The Unlicense') {
    return ('(https://choosealicense.com/licenses/unlicense/)');
  }
  else {
    return ('');
  };

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Return the readme file content as a string
  return `# ${data.title ? data.title : 'Untitled'}
## License
${renderLicenseBadge(data.license) + renderLicenseLink(data.license) ? renderLicenseBadge(data.license) + renderLicenseLink(data.license) : 'Not found'} \n
The applicable license for this project is ${data.license}.
## Description
${data.description ? data.description : 'Not Available'}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Collaborators](#collaborators)
4. [Contribution Guidelines](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
## Installation
\`\`\`
${data.install ? data.install : 'Not Available'}
\`\`\`
## Usage
${data.usage ? data.usage : 'Not Available'}
## Collaborators
${data.contribution ? data.contribution : 'No other contributors'}
## Contributing
${data.contribution ? data.contribution : "Not Applicable"}
## Tests
${data.test ? data.test : 'Not Applicable'}
## Questions
If you would like to contact me or you have any questions, please reach me via [GitHub](https://github.com/${data.username}) or by [email](mailto:${data.email})`
}

// Exports the generate markdown function to be used in other files
module.exports = {
  generateMarkdown,
}
