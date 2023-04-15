var todolist = [
    { title: 'Cabbage', isComplete: false},
    { title: 'Garlic', isComplete: false},
    { title: 'Apple', isComplete: true},
  ];
var currentText = ""
function appendList() {
    todolist = [...todolist, ...[currentText]]

}
function removeFromList() {
    const newList = todolist.filter((item) => item.title !== currentText);
    todolist = newList
}

function MyButton(props) {
    check = props.type;
    function handleClick() {
        if(check){
            appendList();
        }else{
            removeFromList();
        }
    }
    return(
        <button onClick={handleClick}>
        {props.title}
        </button>);


}
  export default function ShoppingList() {
    const listItems = todolist.map(product =>
        <div> </div>
      <li
        key={product.title}
        style={{
          color: 'black'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );

  }
  