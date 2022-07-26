import React from "react";
function Real(props){
    return (
        <div className={props.mainClass}>
                            <p className='title'>{props.title}</p>
                            <p className="tab-content">{props.content}</p>
                            <p className="span">{props.span}</p>
                            <button className="btn" variant="outline-primary">{props.button}</button>
                            </div>
    )
}
export default Real;