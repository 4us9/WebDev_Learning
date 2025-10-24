import React from 'react'

export default function Play()
{
    return(

        <Toolbar
        onPlayMovie = { () => alert('Playing')}
        onUploadImage = { () => alert('Uploading')}
        />
    );
}

function Toolbar( {onPlayMovie, onUploadImage })
{
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>

            <Button onClick = {onUploadImage}>
                Upload Image
            </Button>

        </div>
    );
}

//some component that will have the name and clicked?
function Button({onClick, children})
{
    return (
        <button onClick = {onClick}>
            {children}
        </button>
    )
}