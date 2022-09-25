const ButtonDownload = (props) => {
    return(
        <div className="main-border-button border-no-active">
            <a href={props.url}>{props.titulo}</a>
        </div>
    )
}

export default ButtonDownload