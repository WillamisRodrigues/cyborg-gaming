
import ButtonDownload from "../Button/ButtonDownload"
const ItemLibrary = (props) => {
    return(
        <div className="item">
            <ul>
                <li><img src={props.imagem} alt="" className="templatemo-item" /></li>
                <li><h4>{props.game}</h4><span>{props.categoria}</span></li>
                <li><h4>Date Added</h4><span>{props.dataA}</span></li>
                <li><h4>Hours Played</h4><span>{props.hora} H {props.minutos} Mins</span></li>
                <li><h4>Currently</h4><span>Downloaded</span></li>
                <li>
                    <ButtonDownload url="" titulo="Donwloaded"/>
                </li>
            </ul>
        </div>
    )
}

export default ItemLibrary