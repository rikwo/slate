import './Board.css'
import BoardList from './BoardList.tsx'

//test function to visualize Board UI
function Board() {
    return (
        <div className=" p-2 border-1 rounded-sm justify-center m-4 bg-teal-100">
            <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-2xl bg-teal-400 w-fit rounded-md px-3 py-1">Board Title</div>
                <button className="m-4">Add List</button>
            </div>
            <div className="inline-flex">
                <BoardList></BoardList>
                <BoardList></BoardList>
                <BoardList></BoardList>
            </div>
        </div>
    )
}

export default Board