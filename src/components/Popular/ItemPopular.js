import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons'

const ItemPopular = (props) => {
    return(
        <div className="item">
            <img src={props.imagem} alt="" />
            <h4>{props.game}<br/><span> {props.categoria}</span></h4>
        <ul>
          <li><FontAwesomeIcon icon={faStar} /> {props.avaliacao}</li>
          <li><FontAwesomeIcon icon={faDownload} />{props.download}</li>
        </ul>
      </div>
    )
}

export default ItemPopular