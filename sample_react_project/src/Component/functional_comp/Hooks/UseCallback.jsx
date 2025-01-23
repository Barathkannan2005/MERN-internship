import { useState } from "react";

const UseCallback = () => {
    var [num, setNum] = useState(0)
    var [dark, setDark] = useState(true)
    var styling = {
        backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black"
    }

    var getItem = () => {
        return [num + 1, num + 2, num + 3]
    }
    return (
        <div style={styling}><button onClick={() => setDark(curTheme => !curTheme)}>Change Theme</button>
            <h2>This is Callback</h2>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
            <button onClick={() => setNum(0)}>Reset</button>
            <h3>This is num {num}</h3>
        </div>
    )
}
export default UseCallback;