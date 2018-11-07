import React,{Component} from 'react';

class Consumer extends Component{
  render(){
    return(
      <div className="card">
        <h5 className="card-header">Consumer</h5>
        <div className="row card-body">

          <div className="col-md-3">
            <div className="form-group">
              <label>Applicant Type *</label>
              <select className="form-control" value={this.props.application_type} onChange={this.props.ChangeApplication_Type}>
                <option value="P">Primary</option>
                <option value="G">Guarantor</option>
                <option value="S">Supplementary</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>ID Type *</label>
              <select className="form-control" value={this.props.id_type} onChange={this.props.ChangeID_Type}>
                <option value="N">National ID</option>
                <option value="F">Family Book</option>
                <option value="P">Passport</option>
                <option value="D">Drivers Licence</option>
                <option value="G">Government Issued ID</option>
                <option value="B">Birth Certificate</option>
                <option value="V">Voter Reg. Card</option>
                <option value="T">Tax Number</option>
                <option value="R">Resident Book</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>ID Number *</label>
              <input className="form-control" value={this.props.id_number} onChange={this.props.ChangeID_Number} required/>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>ID Expiry Date</label>
              <input className="form-control" type="date" value={this.props.id_expiry_date} onChange={this.props.ChangeID_Expiry_Date} required/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Gender *</label>
              <select className="form-control" value={this.props.gender} onChange={this.props.ChangeGender}>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Marital Status *</label>
              <select className="form-control" value={this.props.marital_status} onChange={this.props.ChangeMarital_Status}>
                <option value="D">Divorced</option>
                <option value="M">Married</option>
                <option value="P">Separated</option>
                <option value="S">Single</option>
                <option value="U">Unknown</option>
                <option value="W">Widow/Widower</option>
                <option value="F">Defacto</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Birth Date *</label>
              <input className="form-control" type="date" required value={this.props.birth_date} onChange={this.props.ChangeBirth_Date}/>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>	Place of Birth Province *</label>
              <select className="form-control" value={this.props.pbp} onChange={this.props.ChangePBP}>
                <option value="KHM">Cambodia</option>
                <option value="THA">Thailand</option>
                <option value="VNM">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>	Place of Birth District</label>
              <select className="form-control" value={this.props.pbd} onChange={this.props.ChangePBD}>
                <option value="KHM">Cambodia</option>
                <option value="THA">Thailand</option>
                <option value="VNM">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>	Place of Birth Commune</label>
              <select className="form-control" value={this.props.pbc} onChange={this.props.ChangePBC}>
                <option value="KHM">Cambodia</option>
                <option value="THA">Thailand</option>
                <option value="VNM">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>English Family Name *</label>
              <input className="form-control" type="text" value={this.props.faname_eng} onChange={this.props.ChangeFaname_Eng} required/>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>English First Name *</label>
              <input className="form-control" type="text" value={this.props.finame_eng} onChange={this.props.ChangeFiname_Eng} required/>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Khmer Family Name *</label>
              <input className="form-control" type="text" value={this.props.faname_khm} onChange={this.props.ChangeFaname_Khm} required/>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label>Khmer First Name *</label>
              <input className="form-control" type="text" value={this.props.finame_khm} onChange={this.props.ChangeFiname_Khm} required/>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label>Email Address</label>
              <input className="form-control" type="text" value={this.props.email_address} onChange={this.props.ChangeEmail_Address}/>
            </div>
          </div>

        </div>
        </div>
    )
  }
}

export default Consumer;