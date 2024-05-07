import React from "react";

function titleYear({title, year}){
    return(
        <>
        <h6 className="experience_title">{title}</h6>
        <p className="experience_year">{year}</p>
        </>
    );
}
export default titleYear;