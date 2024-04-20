# What does this template do for you?
this is here to serve as a quick start for a fully tested ts defold project. There is only one file that is a pain to write in ts and thats `app/tests/test_runner.script`
What's included:
* defold-ts
* deftest
* custom types for deftest
* ci for testing in gh actions
* custom scripts
    - setupTests.js (swaps main collection to test view and back to main)
    - boilerPlateGen.js (makes mostly blank ts files for tests,scripts,gui scripts)
    - docsGen.js (the way our ts files are its kinda strange and we need a script to pass it into ts doc)
* tsdoc
* examples of how to use some defold apis in ts (its mostly the same as lua just with types)
* working ios and android cd (easy to copy for desktop if you want)


# Dev Quick Start
- Use `npm run dev` to start a watcher that compiles and emits lua and script when you save  
- Use `npm run build` to just compile yyour ts, sans watcher  

2. Initialize
```bash
npm install
```

3. Generate
```bash
npm run build # Transpile the TypeScript files to lua
# or
npm run dev # Watch for changes and regenerate files on save
```

4. Open `app/game.project` in Defold
- Start making games

## Boiler plate:
There is simple cli for generating some of the boiler plate you need 

`npm run boilerPlate <template> <path>`

Example: 

`npm run boilerPlate test .\src\code\gameContextManger\`


## Other commands and what they do. 

None of these commands do you ever need to run they are all here for automation.

* `gendocs`-> run docsGen.js that scrapes all of your ts syource files and pumps them into typedoc because we have a lot of entry points to your code. 
* `setupTests`-> runs setupTests.js with the arg "test" that will make the main view in defold your testing view that runs tests and closes 
* `setmain`-> runs setupTests.js with the arg "main" this is used to set your main view to your main view used in building incase we forget to swap views back before a commit we will still build the main view instead of say "board level 1"
* `resolve`-> library resolve ( I dont know what does does) I think this pulls down types for defold plug in that has types. 
* `lint`-> runs eslint on src dir to lint your code.