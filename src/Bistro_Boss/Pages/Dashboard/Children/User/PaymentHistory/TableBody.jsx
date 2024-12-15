import React from 'react';

const TableBody = ({item,index, refetch}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{item.email}</td>
            <td>${item.price}</td>
            <td>{item.time}</td>
            <td>{item.status}</td>
        </tr>
    );
};

export default TableBody;