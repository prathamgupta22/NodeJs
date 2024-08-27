const fs = require("fs");

try {
  const data = fs.readFileSync("D:/Project/NodeJs/Section 1/notes.txt", "utf8"); // Use the full path
  console.log(data);
} catch (err) {
  console.error("Error reading the file:", err.message);
}

// To write to a file in Node.js with the shortest possible code, you can use the fs.writeFileSync() method from the built-in fs (File System) module

require("fs").writeFileSync("filename.txt", "Hello, world!");

// This code does the following:

// require('fs'): Imports the fs module.
// writeFileSync('filename.txt', 'Hello, world!'): Synchronously writes the string 'Hello, world!' to a file named filename.txt. If the file does not exist, it creates one. If it exists, the content is replaced.

// To rename a file in Node.js using the shortest possible code, you can use the fs.renameSync() method from the fs module. Here’s a minimal version:

require("fs").renameSync("oldname.txt", "newname.txt");
// This code renames the file oldname.txt to newname.txt. It operates synchronously, meaning it will block execution until the operation is complete.

// To rename a file using Node.js in the shortest way, you can use this code:
require("fs").renameSync("oldname.txt", "newname.txt");
// This will rename oldname.txt to newname.txt. If oldname.txt exists, it will be renamed; if not, an error will occur.
