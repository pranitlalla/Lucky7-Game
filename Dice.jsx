import "./Dice.css"
import Die from "./Die"

export default function Dice({dice, color = "black"}){
    return(
        <section className = "Dice">
            {dice.map((v, index) => {
                return(
                    <Die key = {index} val = {v} color = {color}></Die>
            )
            })}
        </section>
    )
}