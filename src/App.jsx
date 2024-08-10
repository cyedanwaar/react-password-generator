import { useState, useEffect } from 'react'
function App() {

  const [password, setPassword] = useState("")
  const [sliderValue, setSliderValue] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)

  function generatePassword(){
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const num_str = "0123456789"
    const char_str = "!@#$%^&*()_+?><|}{~`-=\\"
    let result = ""
    let counter = 1;

    let commulative_string = alphabets

    if(numbers && characters){
      commulative_string += num_str
      commulative_string += char_str
    }else if(numbers){
      commulative_string += num_str
    }else if(characters){
      commulative_string += char_str
    }else{
      commulative_string = alphabets
    }

   
    while (counter <= sliderValue){
      result += commulative_string.charAt(Math.floor(Math.random() * commulative_string.length))
      counter += 1
    }
    console.log(result, result.length)
    setPassword(result)
  }

  function copyToClipboard(){
    navigator.clipboard.writeText(password)
    console.log(`Password copied to clipboard: ${password}`)
    alert("Password copied")
  }

  useEffect(()=>{

    console.log(`Slider Value: ${sliderValue}, Numbers: ${numbers}, Characters: ${characters}`)
    generatePassword()
  },[sliderValue, numbers, characters])

  return (
    <>

    <div className='container'>
      <div className='password-div'>
        <p>{password}</p>
        <button onClick={copyToClipboard}>Copy</button>
      </div>


      <div className='options'>
        <div><input type="range" max={30} min={8} value={sliderValue} onChange={e=>setSliderValue(e.target.value)} /><label>{`Length(${sliderValue})`}</label></div>
        <div><input id='numbers' type="checkbox" checked={numbers} onChange={e=>setNumbers(e.target.checked)} /><label htmlFor="numbers">Numbers</label></div>
        <div><input id='characters' type="checkbox" checked={characters} onChange={e=>setCharacters(e.target.checked)} /><label htmlFor="characters">Characters</label></div>
      </div>
    </div>
     
    </>
  )
}

export default App
