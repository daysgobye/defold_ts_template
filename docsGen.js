const fs = require("fs");
const path = require("path");
const { execSync } = require('child_process');

let tsFiles = []


async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield entry;
    }
}

// Then, use it with a simple async for loop
async function main() {
    for await (const p of walk("src/code")) {
        tsFiles.push(p)
    }
    const files = tsFiles.join(" ")
    const command = `npx typedoc --plugin typedoc-plugin-markdown --out ./docs/genarated ${files}`
    let stdout = execSync(command);


}


main()


