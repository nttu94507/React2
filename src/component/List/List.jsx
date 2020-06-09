import React from 'react'
import ProtoType from 'prop-types';

const List = (props) =>{
    const {match} =props
    return (
        <div>{JSON.stringify(match)}</div>

    )
}

List.ProtoType ={
    match:ProtoType.shape({})
}

List.defaultProps = {
    match: {},
}

export default List 