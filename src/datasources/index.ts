import { DataSource, DataSourceConfig } from "apollo-datasource";

export class MemoryDataSource extends DataSource {

    context: DataSourceConfig<any>;

    constructor(){
        super();
    }

    initialize(dataSourceConfig: DataSourceConfig<any>){
        this.context = dataSourceConfig.context;
    }

    books = [
        {
            id: 1,
            title: "Book 1",
            author: { name: "Bob Bobert" }
        },
        { 
            id: 2,
            title: "Anders Book",
            author: { name: "Anders Bea" }
        }
    ];

    getBook(id){
        return this.books.find(book => book.id == id);
    }

    getAllBooks(){
        return this.books;
    }
}