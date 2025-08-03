import { createContext, useEffect, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

export default function ContextProvider({children}) {

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')

    //console.log('ContextProvider')
    async function onSent(prompt) {
        setResultData('')
        setLoading(true)
        setShowResult(true)
        try {
            const response = await main(prompt)
            setResultData(response)
            setLoading(false)
            setInput('')            
        } catch (e){
            //...
        }
        
    }
    //useEffect(()=> {onSent('What is react')}, [])
    
    const contextValue = {
        prevPrompts, 
        setPrevPrompts, 
        onSent,
        input,
        setInput, 
        recentPrompt, setRecentPrompt,
        showResult,
        loading,
        resultData
    }
    
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

