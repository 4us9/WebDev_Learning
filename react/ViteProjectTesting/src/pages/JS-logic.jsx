import React from 'react'

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
     
};

function JSLogic()  
{
    return (
        <section>
            <div style={person.theme}>
                <h1> {person.name}'s ToDos</h1>

                <img
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                />

                <ul>
                    <li>Improve the video phone</li>
                    <li>Prepare aeronautics lectures </li>
                    <li>Work on the alcohol-fuelled engine</li>
                </ul>
            </div>

        </section>

    );
}

export default JSLogic;

