import React from 'react'
import Todo from './Todo'




// This is a Destructure

const Item = ({lists, name, storeName, todoClick}) => (
    <div>   
            <h1 style={{color:"#cc2900"}}>{name}</h1>
            <br/><hr/><br/>
        <ol>
            {/* { lists.map( product => 
            <Todo key={product.id} 
                    id={product.id} 
                    name={product.name}  
                    price={product.price} 
                    complete={product.complete} /> )} */}
            { lists.map( product => <Todo key={product.id} {...product} todoClick={todoClick} />)}
        </ol>
    </div>
);

export default Item;