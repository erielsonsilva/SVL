import React, { useState } from "react";
import { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

export  default function BookTable() {
    let [comments, setComments] = useState([])


    const columns = [{
        dataField: 'id',
        text: 'id'

    }, {
        dataField: 'name',
        text: 'nome'
    }, {

        dataField: 'email',
        text: 'email'
    },{
        dataField: 'body',
        text: 'Texto'
    }
]

    const Product = [{
        id: 1,
        name: 'livro 1',
        price: 10
    }, {
        id: 1,
        name: 'livro 2',
        price: 10
    }, {
        id: 1,
        name: 'livro 3',
        price: 10
    }
    ]


    const getcomments= () => {
        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(Response => Response.json())
            .then(data => {
                console.log('comments', data)
                setComments(data)

            })
    }

    useEffect(() => {
        getcomments();

    }, [])


    return (
        <div>
            <BootstrapTable keyField='id' data={comments} columns={columns} pagination= {paginationFactory()}/>
        </div>
    )

} 