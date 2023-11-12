import {useState} from "react";

function Question({title, info}){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div style={{background:"white", margin:20, padding:30}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{fontWeight:700}}>
                {title}
            </div>
            <button onClick={() => {setIsOpen((prev) => !prev)}}>{isOpen ? "-" : "+"}</button>
        </div>
            {isOpen && <p>{info}</p>}
    </div>
    );
}

export default Question;
