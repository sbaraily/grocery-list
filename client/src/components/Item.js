import React from 'react'
import Todo from './Todo'

const Item = ({lists, name, storeName, todoClick}) => (
    <div>   
            <h1 style={{color:"#cc2900"}}>{name}</h1>
            <br/><hr/><br/>
        <ol>
            { lists.map( product => <Todo key={product.id} {...product} todoClick={todoClick} />)}
        </ol>
    </div>
);

export default Item;