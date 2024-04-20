const fs = require("fs");
let arg = undefined
const args = ["test", "main"]
const views = {
    "test": 'main_collection = /tests/test_runner.collectionc\n',
    "main": 'main_collection = /code/combatOver/combatOver.collectionc\n'
}

process.argv.forEach(function (val, index, array) {
    if (arg === undefined && args.includes(val)) {
        arg = val
    }

});

if (arg) {
    fs.readFile("./app/game.project", 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(/main_collection = .*(?:\r?\n)/gm, views[arg]);

        fs.writeFile('./app/game.project', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    })
}
const hash = process.argv.pop()
if (!args.includes(hash)) {
    fs.readFile("./app/game.project", 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace("version = 1.1", `version = ${hash}\n`);
        console.log(result)
        fs.writeFile('./app/game.project', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    })
}