// // // TODO

// // var Shoppinglist = (props)=> (
// //     <ul>
// //         {props.shops.map(shop => <ShoppingListItem shop = {shop}/>)}
// //     </ul>
// // )
// // class ShoppingListItem extends React.Component {
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             done: false
// //         };
// //     }
// //     onListItemClick(){
// //         this.setState({
// //             done: !this.state.done
// //         });
// //     }
// //     render(){
// //         var style = {
// //             textDecoration: this.state.done ?'Bold' : 'done'
// //         };
// //         return(
// //             <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.shop}</li>
// //         );
// //     }
// // }

// // // var Shoppinglist =(props) =>(
// // //     <ul>
// // //       {props.shops.map(shop=><ShoppingListItem shop={shop}/>)}
// // //     </ul>
// // // );

// // // var App = () => (
// //     <div>
// //         <h1>Shanshan's shopping list</h1>
// //         <Shoppinglist shops={['Coffee','Tea','Rice']}/>
// //     </div>
// // //   );

//   ReactDOM.render(<div>
//     <h1>Shanshan's shopping list</h1>
//     <Shoppinglist shops={['Coffee','Tea','Rice']}/>
// </div>, document.getElementById("app"));

// var App = () => (
// //     <div>Shanshan's shopping list
//             <ul>
//             <li>'Tea'</li>
//             <li>'Cofee'</li>
//             <li>'Rice'</li>
//             </ul>
//         </div>
// )

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  onListItemMouseOver() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontSize: this.state.done ? "5rem" : "4rem",
    };
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>
        {this.props.GroceryListItem}
      </li>
    );
  }
  // return (
  // <ul>
  //     <li onMouseMove = {onListItemMouseOver}>{props.GroceryListItems[0]}</li>
  //     <li>{props.GroceryListItems[1]}</li>
  //     <li>{props.GroceryListItems[2]}</li>
  // </ul>
  // );
}

var GroceryList = (props) => (
  <ul>
    {props.GroceryListItems.map(GroceryListItem => 
      <ListItem GroceryListItem={GroceryListItem} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h1>My Shopping List</h1>
    <GroceryList GroceryListItems={["Tea", "Coffee", "Rice"]} />
  </div>
);

// class TodoListItem extends React.Component {
//     constructor(props) {
//       super(props);
  
//       // `state` is just an object literal
//       this.state = {
//         done: false
//       };
//     }
  
//     // When a list item is clicked, we will toggle the `done`
//     // boolean, and our component's `render` method will run again
//     onListItemClick() {
//       this.setState({
//         done: !this.state.done
//       });
//     }
  
//     render() {
//       // Making the style conditional on our `state` lets us
//       // update it based on user interactions.
//       var style = {
//         textDecoration: this.state.done ? 'line-through' : 'none'
//       };
  
//       // You can pass inline styles using React's `style` attribute to any component
//       // snake-cased css properties become camelCased this this object
//       return (
//         <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//       );
//     }
//   }
//   var TodoList = (props) => (
//     <ul>
//       {props.todos.map(todo =>
//         <TodoListItem todo={todo} />
//       )}
//     </ul>
//   );
//   var App = () => (
//     <div>
//       <h2>My Todo List</h2>
//       <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//     </div>
//   );
ReactDOM.render(<App />, document.getElementById("app"));
