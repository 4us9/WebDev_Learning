import React from 'react'
import { getImageUrl } from '../components/utils.js'

//define the Avatar child component to get a 
//more flexible child component of the MAIN component.

function Avatar({person, size})
{
    return (
        <img 
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />

    );
}

export default function Profile2()
{
    return (

        <div>
            {/*Child component #1*/}
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saurhashi',
                    imageId: 'YfeOqp2'
                }}
            />

            {/*Child component #2*/}
            <Avatar 
                size={80}

                person = {{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />

            {/*Child component #3:*/}
            <Avatar
                size={50}
                person={{
                    name:'Lin Lanying',
                    imageId:'1bX5QH6'
                }}
            />



        </div>
    );
}