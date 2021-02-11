import React from 'react'
import Card from './Card'

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/check-circle.svg" width="20px" alt="Done"></img>)
    } else {
        return (<img src="./assets/x-circle.svg" width="20px" alt="Not done"></img>)
    }
}

function ListItem(props) {
    return (<li>
        <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div className="listButtons">
                <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={() => { props.onItemDeleted(props.item) }}>
                    <img src="./assets/bin.png" width="20px" alt="Lixo"></img>
                </button>
            </div>
        </Card>
    </li>)
}

export default ListItem;