import { useEffect, useState } from 'react'
import './App.css'
import { SingleCard } from './components/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.png" ,matched : false},
   { "src": "/img/potion-1.png" ,matched : false },
    { "src": "/img/ring-1.png" ,matched : false}, 
    {"src": "/img/scroll-1.png",matched : false},
     {"src": "/img/shield-1.png",matched : false}, 
     {"src": "/img/sword-1.png",matched : false}
]


function App() {
const  [cards,setCards] = useState([])
const [turns,setTurns] = useState(0)
const [choiceOne,setChoiceOne] = useState(null)
const [choiceTwo,setChoiceTwo] = useState(null)
const [disable,setdisable] = useState(false)
useEffect(()=>{

if(choiceOne && choiceTwo){
  setdisable(true)
  if(choiceOne.src === choiceTwo.src){
    console.log("hh");
    setCards(prevCard => {
      return prevCard.map(card =>{
        if(card.src === choiceOne.src){
          return {...card, matched:true}
        } else {return card}
      } )
    })

resetTurn()  } else{
  console.log("gg");

       setTimeout(() => {
        resetTurn()
       }, 1000);
}
}
},[choiceOne,choiceTwo])
console.log(cards,turns);
const resetTurn = ()=>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns+1)
  setdisable(false)
}
  const shuffleCards = ()=>{
    const shuffledCards = [...cardImages,...cardImages]
    .sort(()=> Math.random() - 0.5 )
    .map((card)=>({...card,id:Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }
 
  const handleChoice = (card)=>{
         choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  useEffect(()=>{
    shuffleCards()
  },[])
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards }>New Game</button>
      <div className='card-grid'>

        {cards.map(card=>(
          <SingleCard card={card} key={card.id} handleChoice={handleChoice}  
          
          flipped={card === choiceOne || card === choiceTwo || card.matched }
          disabled= {disable}
           />
        ))} 
      </div>
           Turns :  {turns}
    </div>
  );
}

export default App