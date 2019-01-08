import React,{Component} from 'react';
import {graphql, compose} from 'react-apollo';
import {getAuhorsQuery, addBookMutation} from '../queries/queries';



class AddBook extends Component{
    constructor(props){
        super(props);
            this.state={
                name:"",
                genre:"",
                authorid:""
            }
        
    }
    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        console.log(data)
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
    }

    }
    submitForm(e){
        e.prevenDefault();
        // console.log(this.state)


    }
    render(){
        // console.log(this.props)
        return(
            <form id="add-book" onSubmit = {this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text"  onChange={(e)=> this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e)=> this.setState({genre: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e)=> this.setState({authorid: e.target.value})}>
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>+</button>

            </form>
        )
    }
}
export default compose(
    graphql(getAuhorsQuery, {name:"getAuthorsQuery"}),
    graphql(addBookMutation, {name:"addBookMutation"})
    )(AddBook);