import React from 'react'

import "./collection-preview.styles.scss"


 const CollectionPreview = ({title}) => {
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview