import React, {Component} from 'react';
import "./sass/main.scss"

class Crud extends Component {
    constructor(props){
        super(props);
        this.state = {
            students: [],
            selectedIndex: -1
        };
    };

    render() {

        const addStudent = (event) => {

            event.preventDefault();

            let name = event.target.screenName.value;
            let surname = event.target.screenSurname.value;
            let date = event.target.screenDate.value;
            let tur = event.target.screenSelect.value;

            event.target.reset();

            let newStudent = {
                name: name,
                surname: surname,
                date: date,
                tur: tur
            };

            if (this.state.selectedIndex > 0){
                this.state.students[this.state.selectedIndex] = newStudent;
                this.state.selectedIndex = -1
            } else {
                this.state.students.push(newStudent);
            }
            this.setState({
                students: this.state.students
            })

        };

        const deleteStudent = (index) => {
            this.state.students.splice(index,1);

            this.setState({
                students: this.state.students
            });
        };

        const editStudent = (index) => {
            this.setState({
                selectedIndex: index
            });
        };

        return (
            <div id="container">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                        <div className="card-header">
                            <h2 className="ml-2">Malumot kiriting</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={addStudent}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="username"
                                    name='screenName'
                                    defaultValue={this.state.students[this.state.selectedIndex]?.name}/>
                                <input
                                    type="text"
                                    className="form-control mt-3"
                                    placeholder="surname"
                                    name="screenSurname"
                                    defaultValue={this.state.students[this.state.selectedIndex]?.surname}/>
                                <input
                                    type="date"
                                    className="form-control mt-3"
                                    name='screenDate'
                                    defaultValue={this.state.students[this.state.selectedIndex]?.date}/>
                                <select
                                    name="screenSelect"
                                    defaultValue={this.state.students[this.state.selectedIndex]?.tur}>
                                    <option > </option>
                                    <option value="kontrakt">kontrakt</option>
                                    <option value="grand">Grand</option>
                                    <option value="superKontrakt">SuperKontrakt</option>
                                </select>
                                <button type="submit" className="btn btn-success">Add</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="col-8 ml-2">
                        <div className="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>
                                    №
                                </th>
                                <th>
                                    Ism Familiya
                                </th>
                                <th>
                                    Tugilgan sana
                                </th>
                                <th>
                                    Oqish turi
                                </th>
                                <th>
                                    Amal
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.students.map((item , index) => {
                                return(
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{item.name + " " + item.surname}</th>
                                        <th>{item.date}</th>
                                        <th>{item.tur}</th>
                                        <th className="d-flex justify-content-between align-items-center">
                                            <button type="button" className="btn btn-danger" onClick={() => {deleteStudent(index)}}>Delete</button>
                                            <button type="button" className="btn btn-info ml-3" onClick={() => {editStudent(index)}}>Edit</button>
                                        </th>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Crud;