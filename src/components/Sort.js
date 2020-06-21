import React from 'react'
import Button from '@material-ui/core/Button';

function Sort() {
    return (
        <div className="container">
            <Button className="mt-2 mr-3" color="primary">Likes - Low to High</Button>
            <Button className="mt-2 mr-3" color="primary">Likes - High to Low</Button>
            <Button className="mt-2 mr-3 ml-2" color="primary">Comments - Low to High</Button>
            <Button className="mt-2 mr-3" color="primary">Comments - High to Low</Button>
        </div>
    )
}

export default Sort
