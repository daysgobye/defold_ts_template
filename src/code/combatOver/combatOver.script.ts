import { getFullText } from "./combatOver"
import { CombatOverMessageKeys } from "./messageKeys"

interface props {
    fightOutCome: "WON" | "LOST"
}

export function init(this: props): void {
    const coinUrl = `/coins`,
        newCoinPos = vmath.vector3(0, -1500, 0),
        gemUrl = `/gems`,
        newGemPos = vmath.vector3(0, -1000, 0)

    go.animate(coinUrl,
        "position",
        go.PLAYBACK_ONCE_FORWARD,
        newCoinPos,
        go.EASING_LINEAR,
        3
    )
    go.animate(gemUrl,
        "position",
        go.PLAYBACK_ONCE_FORWARD,
        newGemPos,
        go.EASING_LINEAR,
        2,
    )

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

export function on_message(this: props, message_id: hash, message: any, _sender: url): void {
    // Add message-handling code here
    // Learn more: https://defold.com/manuals/message-passing/
    // Remove this function if not needed
    if (message_id === hash(CombatOverMessageKeys.RegisterData)) {
        this.fightOutCome = message.fightOutCome
        label.set_text("/coins#fightOutCome", getFullText(message.fightOutCome))

    }
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


