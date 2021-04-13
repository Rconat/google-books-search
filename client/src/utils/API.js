import axios from "axios";

export default {
    // Gets all books
    getBooks : function (){
        return axios.get("/api/books")
    },
    // Saves a book to the database
    saveBook : function (data){
        return axios.get("/api/books", data)
    },
    // Deletes the book with the given id
    deleteBook : function (data, id){
        return axios.delete("/api/books" + id, data)
    }
}