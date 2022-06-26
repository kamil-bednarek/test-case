import React from "react";
import Board from "react-trello";
import data from "./../data/db.json";

export const Home = () => {
    return (
        <Board
            card
            Draggable
            canAddLanes
            collapsibleLanes
            editable
            data={data}
            draggable
        />
    );
};
