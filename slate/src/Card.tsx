import './Card.css'


//test function to visualize Card UI
function Card() {
    return (
        <div className="inline-flex flex-col p-2 border-1 rounded-sm justify-center m-4">
            <div className="font-bold">This is a Card title</div>
            <div className="info">This is the information on the Card</div>
        </div>
    )
}

export default Card