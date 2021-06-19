import { useState } from "react"

function WordCount() {
    const [text,setText] = useState("")
    const [count,setCount] = useState(0)

    const updateText = (e) => {
        setText(e.target.value)
        var newText = e.target.value
        var numWords = newText.split(" ").filter(n=>n!=="").length
        setCount(numWords)
    }

    const clearScreen = () => {
        setText("")
        setCount(0)
    }

    return (
        <div>
            <form>
                <label htmlFor="text-field">Text:</label>
                <input type="text" value={text} onChange={updateText}/>
            </form>
            <div>
              <div>Count: {count}</div>  
            </div>
            <div>
                <input type="button" value="clear" onClick={clearScreen} />
            </div>
        </div>
    )
}

export default WordCount
