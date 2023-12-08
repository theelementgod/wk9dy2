import { useState } from "react"

const Component = () => {

    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
        })

    const handleClick = () => {
        if (game.player.name === 'Dylan'){
            setGame({...game, player: { name: 'Christian' }})
        } else {
            setGame({...game, player: { name: 'Dylan' }})
        }
    }
  return (
    <>
        <h3>{game.player.name}</h3>
        <button onClick={handleClick}>Click Me</button>

    </>
  )
}
export default Component