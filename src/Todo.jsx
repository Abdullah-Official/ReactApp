const [inputList,setInputList] = useState('')
const [Items,setItems] = useState([])
const itemEvent = (event) =>{
        setInputList(event.target.value)
}
const listOfItems = () =>{
         setItems((oldItem)=>{
              return [...oldItem, inputList]
         })
         setInputList('')
}

const deleteItems = (id) =>{
     setItems((oldItem)=>{
          return oldItem.filter((arrElem,index)=>{
               return index != id;
          })
     })
 }
return(
<>
<div className="main_div">
    <div className="center_div">
         <br/>
         <h1> ToDo List </h1>
         <br/>
         <input type="text" onChange={itemEvent} value={inputList} placeholder="Add a item"/>
         <button onClick={listOfItems}> + </button>
         <ol>
            {Items.map((itemVal,index) =>{
                 return <ToDoLists key={index} 
                 id={index} 
                 text = {itemVal}
                 onSelect = {deleteItems}
                 />
                
                 
            })}
          </ol>
    </div>
</div>