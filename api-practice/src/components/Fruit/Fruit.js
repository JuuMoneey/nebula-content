import './Fruit.css'

export default function Fruit(props){
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.season}</p>
            <p>{props.color}</p>
            <p>{props.grows}</p>
            <p>{props.inSeason}</p>
            <p>{props.image}</p>
        </div>
    );
}