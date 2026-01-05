import './App.css'

function App() {


  return (
    <>
        <Board></Board>
    </>
  )
}
//test function to visualize Board UI
function Board() {
    return (
        <div>
            <BoardList></BoardList>
        </div>
    )
}
//test function to visualize List UI
function BoardList() {
    return (
        <div>
            <Card></Card>
        </div>
    )
}
//test function to visualize Card UI
function Card() {
    return (
        <div>

        </div>
    )
}

export default App
