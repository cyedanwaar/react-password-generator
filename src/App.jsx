import { useEffect, useState, useCallback, useRef } from "react"

export default function App(){
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "~!@#$%^&*()_+=-.,<>/?'\\}{|`"

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * (str.length + 1))
      pass += str.charAt(char)
    }

    setPassword(pass)

    console.log(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed])


  return(
    <>
      <div className="flex flex-col items-center justify-center bg-gray-300 w-[50vw] mt-5 rounded-lg">
        <h1 className="text-gray-900 mt-4 text-4xl"> Password Generator</h1>

        <div className="my-4 w-3/4 flex-nowrap flex justify-center">
          <input type="text"
          className="outline-none border-none rounded-l-lg px-2 py-1 w-4/5"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyToClipBoard} className="px-2 py-1 bg-green-600 hover:bg-green-500 transition-all rounded-r-lg">Copy</button>
        </div>

        <div className="flex flex-col justify-start items-start mb-4">
            <div className="flex items-center justify-center gap-4"><input min={6} max={50} value={length} onChange={e=> setLength(e.target.value)} id="slider" type="range" /> <label htmlFor="slider">{`Length(${length})`}</label></div>
            <div className="flex items-center justify-center gap-4"><input checked={numberAllowed} onChange={e=>setNumberAllowed(prev=>!prev)} id="numbers" type="checkbox" /> <label htmlFor="numbers">Numbers</label></div>
            <div className="flex items-center justify-center gap-4"><input checked={characterAllowed} onChange={e=>setCharacterAllowed(prev=>!prev)} id="characters" type="checkbox" /> <label htmlFor="characters">Characters</label></div>
        </div>

      </div>
    </>
  )
}