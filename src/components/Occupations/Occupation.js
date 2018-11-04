import React,{Component} from 'react';

class Occupation extends Component{
  render(){
    return(
      <div className="card">
        <h5 className="card-header">Occupation</h5>
        <div className="row card-body">

          <div className="col-md-3">
            <div className="form-group">
              <label>Employment Type *</label>
              <select className="form-control" value={this.props.employment_type} onChange={this.props.onChangeEmploymentType}>
                <option value="C">Current</option>
                <option value="P">Previous</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Self Employed *</label>
              <select className="form-control" value={this.props.self_employed} onChange={this.props.onChangeSelfEmployed}>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Length of Service(M)*</label>
              <input className="form-control" value={this.props.lenght} onChange={this.props.onChangeLenght} required/>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Occupation *</label>
              <input className="form-control" value={this.props.occupation} onChange={this.props.onChangeOccupation} required/>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label>Employer Name *</label>
              <input className="form-control" value={this.props.employer_name} onChange={this.props.onChangeEmployerName} required/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Total Monthly Salary/Income *</label>
              <input className="form-control" value={this.props.salary} onChange={this.props.onChangeSalary} required/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Currency *</label>
              <select className="form-control" value={this.props.currency} onChange={this.props.onChangeCurrency}>
                <option value="KHR">Riel</option>
                <option value="USD">US Dollar</option>
                <option value="THB">Baht</option>
              </select>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Employer Address Type</label>
              <select className="form-control" value={this.props.emp_address} onChange={this.props.onChangeEmpAddress}>
                <option value="RESID">Residential</option>
                <option value="WORK">Work</option>
                <option value="POST">Correspondence</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Province</label>
              <select className="form-control" value={this.props.emp_prov} onChange={this.props.onChangeEmpProvince}>
                <option value="KHM">Cambodia</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>District</label>
              <select className="form-control" value={this.props.emp_dist} onChange={this.props.onChangeEmpDistrict}>
                <option value="KHM">Cambodia</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Commune</label>
              <select className="form-control" value={this.props.emp_comm} onChange={this.props.onChangeEmpCommune}>
                <option value="KHM">Cambodia</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Village</label>
              <select className="form-control" value={this.props.emp_vill} onChange={this.props.onChangeEmpVillage}>
                <option value="KHM">Cambodia</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Street English</label>
              <input className="form-control" value={this.props.emp_street} onChange={this.props.onChangeEmpStreet}/>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>House English</label>
              <input className="form-control" value={this.props.emp_house} onChange={this.props.onChangeEmpHouse}/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Village-Other English</label>
              <input className="form-control" value={this.props.emp_vill_eng} onChange={this.props.onChangeEmpVillageEng}/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Village-Other Khmer</label>
              <input className="form-control" value={this.props.emp_vill_khm} onChange={this.props.onChangeEmpVillageKhm}/>
            </div>
          </div>

        </div>
        </div>
    )
  }
}

export default Occupation;