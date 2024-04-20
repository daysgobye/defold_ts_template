import { getFullText } from "./combatOver"

export default () => {
    describe("combatOver Tests", () => {

        before(() => {
            // -- this function will be run before each test
        })

        after(() => {
            // -- this function will be run after each test
        })

        test("Will Return corrext full text for short text", () => {
            const fullText = getFullText("WON")
            assert_equal(fullText, "You Won Good Job")
            const fullText2 = getFullText("LOST")
            assert_equal(fullText2, "Too Bad :(")
        })

    })
}
