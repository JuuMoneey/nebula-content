import './Search.css'

export default function Search(props){
    return(
        <div className='search'>
            <select onChange={e => props.handleChange(e)} value={props.dropValue}>
            <option defaultValue>Select An Option</option>
                {props.options.map(dogName => <option key={Math.random(1)*1000000} value={dogName}>{dogName}</option>)}
            </select>
        </div>
    )
}
