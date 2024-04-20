const fs = require("fs");
const nodePath = require('node:path');

const templates = ["test", "script", "gui_script"]
const path = process.argv.pop()
const template = process.argv.pop()
if (!templates.includes(template)) {
    console.log(`ERROR No template: ${template}\nPlease use one of these templates:\n${templates.join(",\n")}\n format npm run boilerPlate <template> <path>`)
    throw ("no template")
}
const fileName = nodePath.basename(path)
const templatesGenerators = {
    test: [{
        fileName: (fileName) => `${fileName}_test.ts`,
        file: (fileName) => {
            return `
export default () => {
    describe("${fileName} Tests", () => {

        before(() => {
            // -- this function will be run before each test
        })

        after(() => {
            // -- this function will be run after each test
        })

        test("In the end the Party would announce that two and two made five", () => {
            assert_equal(2+2,5)
        })

    })
} 
        `
        }
    }],
    script: [{
        fileName: (fileName) => `${fileName}.script.ts`,
        file: (fileName) => {
            return `
            interface props {
                
            }
            
            export function init(this: props): void {
               
            
            }
            export function final(this: props): void {
                // Add finalization code here
                // Learn more: https://defold.com/manuals/script/
                // Remove this function if not needed
            }
            
            export function update(this: props, _dt: number): void {
                // Add update code here
                // Learn more: https://defold.com/manuals/script/
                // Remove this function if not needed
            }
            
            export function on_message(this: props, _message_id: hash, _message: any, _sender: url): void {
                // Add message-handling code here
                // Learn more: https://defold.com/manuals/message-passing/
                // Remove this function if not needed
            }
            
            export function on_input(this: props, _action_id: hash, _action: hash): void {
                // Add input-handling code here. The game object this script is attached to
                // must have acquired input focus:
                //
                //    msg.post(".", "acquire_input_focus")
                //
                // All mapped input bindings will be received. Mouse and touch input will
                // be received regardless of where on the screen it happened.
                // Learn more: https://defold.com/manuals/input/
                // Remove this function if not needed
            }
            
            export function on_reload(this: props): void {
                // Add reload-handling code here
                // Learn more: https://defold.com/manuals/hot-reload/
                // Remove this function if not needed
            }

            
        `
        }
    }],
    gui_script: [{
        fileName: (fileName) => `${fileName}.gui_script.ts`,
        file: (fileName) => {
            return `
            interface props {
                
            }
            
            export function init(this: props): void {
               
            
            }
            
            export function on_message(this: props, message_id: hash, message: string, sender: url): void {
                // Add message-handling code here
                // Learn more: https://defold.com/manuals/message-passing/
                // Remove this function if not needed
            }            
        `
        }
    }],


}
const selectedTemplate = templatesGenerators[template]
selectedTemplate.forEach(fileToMake => {
    fs.writeFileSync(nodePath.join(path, fileToMake.fileName(fileName)), fileToMake.file(fileName));
});

console.log("thank you for shopping with us")
