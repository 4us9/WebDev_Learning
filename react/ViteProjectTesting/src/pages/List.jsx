import React from 'react'
import { people } from '../components/data.js';
import { getImageUrl } from '../components/utils.js';

function List()
{
    const listItems = people.map(person =>
        <li key = {person.id}>
            <img
                src = {getImageUrl(person)}
                alt = {person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '} known for 
                {person.accomplishment}
            </p>
        </li>
    );
    
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
        
    );
}

export default List;