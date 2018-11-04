import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConsumers, fetchDeleteConsumer } from '../actions/consumerActions';
import { Link } from 'react-router-dom';

class List extends Component{
  componentWillMount(){
    this.props.fetchConsumers();
  }

  DeleteConsumer = (event) =>{
    console.log(event.target.value)
    this.props.fetchDeleteConsumer(event.target.value);
    setTimeout(()=>{
      this.props.fetchConsumers();
    },500)
  }

  render(){
    const consumerender = (
      this.props.consumers.message === 'not found consumer.'?

      <tr>{this.props.consumers.message}</tr> 
      
      :
      
      this.props.consumers.map(con=>{
        return(
          <tr key={con._id}>
            <th scope="row">{con.currency}</th>
            <td>{`${con.faname_eng} ${con.finame_eng}`}</td>
            <td>{con.phone_number}</td>
            <td>{con.amount}</td>
            <td>{`${new Date(con.created).toLocaleDateString()} ${new Date(con.created).toLocaleTimeString()}`}</td>
            <td>
              <Link to={`/consumer/${con._id}`} className="fas fa-pen-nib text-info" data-toggle="tooltip" title="Edit"></Link>
              <button className="btn-visible fas fa-trash-alt text-danger" data-toggle="tooltip" title="Delete" onClick={this.DeleteConsumer} value={con._id}></button>
              <i className="fas fa-archive text-primary" data-toggle="tooltip" title="Request to CBC"></i>
            </td>
          </tr>
        )
      })
    )

    return(
      <div className="container-flud">
        <h4>Consumer Information - Consumer Personal List</h4>
        <div className="card">
          <div className="row card-body">
            <table className="col-md-12 table table-hover">
              <thead>
                <tr>
                  <th scope="col">Currency</th>
                  <th scope="col">English Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Created</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                { consumerender }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  consumers: state.consumers.items
})

export default connect(mapStateToProps, { fetchConsumers, fetchDeleteConsumer })(List);