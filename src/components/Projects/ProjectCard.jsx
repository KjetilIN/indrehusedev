import React from "react";

export const ProjectCard = (props) => {
    return (
        <>
            <div className="card lg:w-[600px] bg-base-100 shadow-xl carousel-item w-[80%] m-auto">
                <figure>
                    {props.img ? <img src={props.img} alt="Shoes" /> : ""}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.title}
                        {props.isNew ? <div className="badge badge-secondary">{props.isNew ? "NEW" : ""}</div> : ""}
                        
                    </h2>
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        {props.languages.map((item) =>(
                           <div key={Math.random()} className="badge badge-outline">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
