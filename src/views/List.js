import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConsumers, fetchDeleteConsumer, fetchCount, fetchsearch } from '../actions/consumerActions';
import { Link } from 'react-router-dom';

class List extends Component{

  state = {
    search: '',
    page: 1
  }

  componentWillMount(){
    this.props.fetchConsumers(this.state.page);
    this.props.fetchCount();
  }

  DeleteConsumer = (event) =>{
    this.props.fetchDeleteConsumer(event.target.value);
    setTimeout(()=>{
      this.props.fetchConsumers(1);
    },500)
  }

  ChangePage = (event) =>{
    this.setState({
      page: event.target.value
    });
    setTimeout(()=>{
      this.props.fetchConsumers(this.state.page);
    },100)
  }

  ChangeSearch = (event) =>{
    this.setState({
      search: event.target.value
    });
    setTimeout(()=>{
      this.props.fetchsearch(this.state.search)
    },200)
  }

  render(){
    const consumerender = (
      this.props.consumers.message === 'not found consumer.'?

      <tr>{this.props.consumers.message}</tr> 
      
      :
      
      this.props.consumers.map((con, index)=>{
        return(
          <tr key={con._id}>
            <th scope="row">{index+1}</th>
            <td>{`${con.faname_eng} ${con.finame_eng}`}</td>
            <td>{`${con.faname_khm} ${con.finame_khm}`}</td>
            <td>{con.phone_number}</td>
            <td>{con.pro_type}</td>
            <td>{con.amount} <label style={{fontWeight: 'bold'}}>{con.currency}</label> </td>
            <td>{`${new Date(con.created).toLocaleDateString()} ${new Date(con.created).toLocaleTimeString()}`}</td>
            <td>
              <Link to={`/consumer/${con._id}`} className="btn-visible fas fa-pen-nib text-info" data-toggle="tooltip" title="Edit"></Link>
              <button className="btn-visible fas fa-trash-alt text-danger" data-toggle="tooltip" title="Delete" onClick={this.DeleteConsumer} value={con._id}></button>
              <button className="btn-visible fas fa-archive text-primary" data-toggle="tooltip" title="Request to CBC"></button>
            </td>
          </tr>
        )
      })
    )
    const page = this.props.count.map(p=>{
      return(
        <li className="page-item" key={p}>
          <button className="page-link" onClick={this.ChangePage} value={p}>{p}</button>
        </li>
      )
    });

    return(
      <div className="container-flud">
        <h4>Consumer Information - Consumer Personal List</h4>
        <hr/>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <input type="text" placeholder="search...." className="form-control" value={this.state.search} onChange={this.ChangeSearch}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td scope="col">NO.</td>
                  <td scope="col">English Name</td>
                  <td scope="col">Khmer Name</td>
                  <td scope="col">Phone Number</td>
                  <td scope="col">Product Type</td>
                  <td scope="col">Amount</td>
                  <td scope="col">Created</td>
                  <td scope="col"></td>
                </tr>
              </thead>
              <tbody>
                { consumerender }
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <button className="page-link" onClick={this.ChangePage} value={1} >Previous</button>
              </li>
              {page}
              <li className="page-item">
                <button className="page-link" onClick={this.ChangePage} value={this.props.count.length}>Next</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  consumers: state.consumers.items,
  count: state.consumers.count
})

export default connect(mapStateToProps, { fetchConsumers, fetchDeleteConsumer, fetchCount, fetchsearch })(List);