import './BoardList.css'
import Card from './Card.tsx'

//test function to visualize List UI
function BoardList() {
    return (
        <div className="inline-flex flex-col p-2 border-1 rounded-sm justify-center m-4">
            <div className={"font-bold text-xl"}>List Title</div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <button className="flex justify-end">Add Card +</button>
        </div>
    )
}

export default BoardList