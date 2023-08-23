interface ICard{
    cardSrc:string;
    cardTitle:string;
}

function Card(props:ICard) {
    return (
        <div className="mt-8 ml-5 h-80 w-60 rounded-3xl cursor-pointer flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img className='object-cover rounded-3xl w-full h-full relative' src={props.cardSrc}></img>   
        <h1 className="absolute text-xl text-white drop-shadow-lg flex items-end h-72 hover:text-teal-300">{props.cardTitle}</h1> 
        </div>
      )
}

export default Card