import React from 'react'

import "./collection-preview.styles.scss"


<<<<<<< HEAD
 const CollectionPreview = ({title, items}) => {
=======
 const CollectionPreview = ({title, items}) => {
>>>>>>> d5860490761dbc07848e501f404758e5bb73fb1f
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview