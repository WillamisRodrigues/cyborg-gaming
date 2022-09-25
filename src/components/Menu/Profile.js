import Avatar from "../../Images/profile-header.jpg"

const Profile = (props) => {
    let ativo = props.verificar 
   let isAtivo
   
   if(ativo === "ativo"){
        isAtivo = "active"
   }else{
        isAtivo = ""
   }


    return(
        <li><a href={props.rota} className={isAtivo}>{props.name} <img src={Avatar} alt="" /> </a></li>
    )
}

export default Profile