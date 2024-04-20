export const getFullText = (fightOutCome: "WON" | "LOST") => {
    return fightOutCome === "WON" ? "You Won Good Job" : "Too Bad :("
}