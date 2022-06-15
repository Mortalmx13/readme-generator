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
      <h3>License</h3>
    <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44" />
  
      `
  )
}


const generatePage = ({
  title,
  location,
  bio,
  linkedIn,
  gitHub,
  license,
}) => {
  console.log('GENERATING PAGE…');
  const template = (
   `
    # ${title}

    ## Table of Content

    ## ${description}

    
    ${generateLicense(license)}
    `
  );
  fs.writeFileSync('./output/README.md', template);
  console.log('TEMPLATE GENERATED!');
  process.exit();
};

module.exports = {
  generatePage
};

// const writeToFile = (filename, data) => {
//   fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
//     if (err) console.log(err);
//   });
// };

// const readFromFile = (filename) => {
//   return fs.readFileSync(filename, 'utf8');
// };

// module.exports = {
//   writeToFile,
//   readFromFile
// };