import React, {useState} from "react";

const Accordion = ({items}) =>{
    //*useState är en primitive hook och den kommer med react library
    //*Det innan = useState(null) kallas array deconstructing
    //*Vi skapar inte en ny array utan vi assignar value till det som står i []
    const [activeIndex, setActiveIndex] = useState(null);

    //*Här ändrar vi activeIndex
    const onTitleClicked = (index) =>{
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) =>{

        const active = index === activeIndex ? "active" : "";

        return <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClicked(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
     
    return (<div className="ui styled accordion">
        {renderedItems}
    </div>
    )
};

export default Accordion;