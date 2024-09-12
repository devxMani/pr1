import { useEffect , useState } from "react"

export default function Pr5() {
 const [time,setTime] = useState(60)
 useEffect(() =>{
    if(time>0){
        const timer = setTimeout(() => setTime(time-1),1000)
    return ()=> clearTimeout(timer)
 }})
    return (
    <div>
      Time left: {time}sec
    </div>
  )
}
