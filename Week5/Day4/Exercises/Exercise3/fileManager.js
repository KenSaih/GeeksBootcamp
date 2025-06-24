const fs = ('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("File content:\n", data);
  } catch (err) {
    console.error(" Error reading file:", err.message);
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(" File written successfully!");
  } catch (err) {
    console.error(" Error writing to file:", err.message);
  }
}

module.exports = { readFile, writeFile };