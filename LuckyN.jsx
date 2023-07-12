import {useState} from "react"
import {getRolls, sum} from "./utils"
import Dice from "./Dice"
import "./LuckyN.css"

export default function LuckyN({numDice = 2, goal = 7}){
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = sum(dice) === goal
    const rethrow = () => {
        setDice(getRolls(numDice))
    }
    return (
        <div className = "LuckyN">
            <h1 style = {{color : isWinner ? "Green" : "Red"}}>Lucky{goal} {isWinner && "Winner"}</h1>
            <Dice dice = {dice}></Dice>
            <button className = "button" onClick = {rethrow}>RE-THROW</button>
        </div>
    )
}