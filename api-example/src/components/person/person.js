import './person.css'
export default function Person(props){
    return (
        <div className="person">
        <p>{props.name}</p>
        <p>{props.age}</p>
        </div>
        
    );
}
