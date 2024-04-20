
type props = {}
type Action = {
    pressed: boolean;
    released: boolean;
    x: number
    y: number
};

export function init(this: props): void {
    msg.post(".", "acquire_input_focus")
}

export function on_input(this: props, action_id: hash, action: Action): void {

    if (action_id == hash("touch") && action.pressed) {
        const button = gui.get_node("button")
        if (gui.pick_node(button, action.x, action.y)) {
            print("Restart clicked")
        }
    }
}

export function final(this: props): void {
    msg.post(".", "release_input_focus")
}
