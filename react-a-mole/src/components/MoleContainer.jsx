import Mole from './Mole'
import Empty from './Empty'
import { useState } from "react"


 export default function MoleContainer() {
    const [isShowing, setIsShowing] = useState(false);
    return <div className="mole-container">
        {
            isShowing ?
            <Mole setIsShowing={setIsShowing} />
            :
            <Empty setIsShowing={setIsShowing}/>


        }
    </div>
 }

