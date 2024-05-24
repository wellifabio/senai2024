import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({data}) => {
    let navigate = useNavigate();

return (
    <>
    {data && data.length > 0 ? (
        data.map(item => (
            <div className="card" key={item.id} onClick={() => navigate(`/${item.id}`)}>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
            <div className="title">
                <h3>{item.name}</h3>
            </div>
            </div>

        ))
    ) : (
        <p>Sem informação</p>
    )}
    </>
);

};