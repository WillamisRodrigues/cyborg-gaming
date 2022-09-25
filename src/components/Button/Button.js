const Button = (props) => {
    return(
        <div className="main-button">
            <a href={props.url}>{props.titulo}</a>
        </div>
    )
}

export default Button