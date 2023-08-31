import React, { Component } from 'react'

export class Formbundle extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            dept: "",
            rating: "",
            empdata: []
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.name);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //validation starts
        var namelen = this.state.name.length;
        var deptlen = this.state.dept.length;
        if (namelen === 0 || namelen > 14) {
            alert("Name must have atleast 1-14 characters!")
        }
        else if (deptlen === 0 || deptlen > 25) {
            alert("Dept. name must have atleast 1-25 characters!")
        }
        else if (this.state.rating.length === 0 || this.state.rating > 5 || this.state.rating === null) {
            alert("Rating must be btwn 1-5!!")
        }
        else {
            var temp = {
                name: this.state.name,
                dept: this.state.dept,
                rating: this.state.rating
            }
            var dis = document.getElementsByClassName("parent")[0];
            dis.classList.remove("displayn");
            this.state.empdata.push(temp);
            this.setState({ empdata: this.state.empdata })
        }

        this.setState({
            name: "",
            dept: "",
            rating: ""
        })
        console.log(this.state.empdata);
    }
    render() {
        return (
            <div>
                <h1>Employee Feedback Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" className="inputbox" name="name" value={this.state.name} onChange={this.handleChange} /><br />
                    <label htmlFor='dept'>Department:</label>
                    <input type="text" id="dept" className="inputbox" name="dept" value={this.state.dept} onChange={this.handleChange} /><br />
                    <label htmlFor='rating'>Rating:</label>
                    <input type="number" id="rating" className="inputbox" name="rating" value={this.state.rating} onChange={this.handleChange} /><br />
                    <input type="submit" className="submitbut" value="Submit" />
                </form>
                <div className='parent displayn'>
                    {this.state.empdata.map((item) => {
                        return (
                            <div id="card">
                                <h5>Name:{item.name} | Department:{item.dept} | Rating:{item.rating}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Formbundle