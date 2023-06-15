import './DogCard.css'

export default function DogCard(props){
    console.log(props)
    return(
        <div className='dogCard'>
            <img src={props.dog} alt={props.dog}/>
        </div>
    )
}
