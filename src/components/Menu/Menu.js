const Menu = (props) => {
   let ativo = props.verificar 
   let isAtivo
   
   if(ativo === "ativo"){
        isAtivo = "active"
   }else{
        isAtivo = ""
   }

    return(
        <li><a href={props.rota} className={isAtivo}>{props.item}</a></li>
    )
}

export default Menu