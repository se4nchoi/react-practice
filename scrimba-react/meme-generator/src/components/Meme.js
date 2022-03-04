import React, {useEffect, useState} from 'react'

import '../assets/css/Meme.css'

// import memesData from '../memesData.js'

function Meme() {
  // const [url, setUrl] = useState('')
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemes, setAllMemes] = useState([])


  function getMemeImage() {
    const randomIdx = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomIdx].url
    
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [allMemes])

  return (
    <main className='wrapper'>
      <div className='meme-wrapper'>
        <input 
          className='top-text'
          type="text" 
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input 
          className='bottom-text'
          type="text" 
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button 
          className='btn-submit'
          type="submit"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼️
        </button>        
      </div>
      <div className='meme'>
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        <img 
          src={meme.randomImage}
          className='meme--image'
          alt="meme"
        />
      </div>
    </main>
  )
}

export default Meme