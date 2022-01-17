const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

const base = path.join(__dirname, "temp2");
console.log(base);

const getContent = () => `\n\r ${process.argv[2] ?? ""}`;

async function createFolder() {
  try {
    if (fsSync.existsSync(base)) {
      await fs.appendFile(path.join(base, "logs.txt"), getContent());
      const data = await fs.readFile(path.join(base, "logs.txt"), {
        encoding: "utf-8",
      });
      console.log(data);
    } else {
      await fs.mkdir(base);
      console.log("folder created!");
      await fs.writeFile(path.join(base, "logs.txt"), process.argv[2] ?? "");
    }
  } catch (error) {
    console.log("err", error);
  }
}
createFolder();
