import { createContext, useEffect, useState } from "react";
import main from "../config/gemini";

const Context = createContext();

function ContextProvider({children}) {

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultdata, setResultData] = useState('')

    async function onSent(prompt) {
        await main(prompt)
    }
    //useEffect(()=> {onSent('What is react')}, [])
    
    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;