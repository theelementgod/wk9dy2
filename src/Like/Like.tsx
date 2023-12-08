import { useState } from "react"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

const Like = () => {
    const [likes, setLikes] = useState(false)

    let heartStatus = (likes ? <FaHeart/> : <FaRegHeart/>)

    const handleClick = () => {
        if (likes === false){
            console.log('loved')
            setLikes(true)
        } else {
            console.log('unloved')
            setLikes(false)
        }
    }
 
  return (
    <>
        <h1>{heartStatus} 🎶 Do you LOVE me? 🎶 { heartStatus } </h1>
        <button onClick={handleClick}>Click to toggle LOVE</button>
    </>
  )
}
export default Like
