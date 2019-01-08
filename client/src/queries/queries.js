import {gql} from 'apollo-boost';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`;
const getAuhorsQuery = gql`
{
    authors{
        name
        id
    }
}
`;
const addBookMutation = gql`
mutation{
    addBook(name:"", genre:"", authorid:""){
        name
        id
    }
}`;

export {getBooksQuery, getAuhorsQuery, addBookMutation}