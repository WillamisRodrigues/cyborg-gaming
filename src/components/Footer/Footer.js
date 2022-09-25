const Footer = (props) => {
    return (
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <p>Copyright © {props.ano} <a href="#">{props.empresa}</a> Company. All rights reserved. 
                
                <br/>Design: <a href={props.url} target="_blank" title={props.design}>{props.design}</a></p>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer