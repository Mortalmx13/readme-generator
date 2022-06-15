const fs = require('fs');

const generateLicense = (type) => {
  let color;
  if (type === "MPL") color = "red";
  if (type === "GPL") color = "gray";
  if (type === "Apache") color = "green";
  if (type === "MIT") color = "blue";
  if (type === "CC") color = "orange";
  if (type === "BSD") color = "goldenrod";
  
  return (
`


<img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44" />

`
  )
}


const generatePage = ({
  title,
  description,
  Installation,
  Usage,
  email,
  gitHub,
  license,
  Contributing,
  test,
}) => {
  console.log('GENERATING PAGE…');
  const template = (
`
# ${title}

${generateLicense(license)}

## Table of Content

1. [Description](#description)
2. [Questions](#questions)

## Description

${description}


${Usage}

${Contributing}

${test}


### Questions

<a href="https://github.com/#${gitHub}">GitHub</a>

#### If there is more questions my email is:

${email}

${Installation}



`
  );
  fs.writeFileSync('./output/README.md', template);
  console.log('TEMPLATE GENERATED!');
  process.exit();
};

module.exports = {
  generatePage
};
