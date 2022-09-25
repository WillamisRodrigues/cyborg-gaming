import Game1 from "../../Images/game-01.jpg"
import Game2 from "../../Images/game-02.jpg"
import Game3 from "../../Images/game-03.jpg"
import ItemLibrary from "./ItemLibrary"
import Button from "../Button/Button"
const Library = () => {
    return(
        <div className="gaming-library">
          <div className="col-lg-12">
            <div className="heading-section">
              <h4><em>Your Gaming</em> Library</h4>
            </div>
            <ItemLibrary imagem={Game1} game="Dota 2" categoria="Sandbox" dataA="24/08/2036" hora="634" minutos="22" />
            <ItemLibrary imagem={Game2} game="Fortnite" categoria="Sandbox" dataA="24/06/2036" hora="740" minutos="52" />
            <ItemLibrary imagem={Game3} game="CS-GO" categoria="Sandbox" dataA="24/06/2036" hora="892" minutos="14" />
          </div>
          <div className="col-lg-12">
           <Button titulo="View Your Library" url=""/>
          </div>
        </div>
    )
}

export default Library