import React, {Component} from 'react';

class Address extends Component{
  render(){
    return(
      <div className="card">
        <h5 className="card-header">Address</h5>
        <div className="row card-body">

          <div className="col-md-12">
            <div className="form-group">
              <label>Address Type *</label>
              <select className="form-control" value={this.props.address_type} onChange={this.props.ChangeAddress_Type}>
                <option value="RESID">Residential</option>
                <option value="WORK">Work</option>
                <option value="POST">Correspondence</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Province</label>
              <select className="form-control" value={this.props.province} onChange={this.props.ChangeProvince}>
                <option value="KHM">Cambodia</option>
                <option value="CHN">China (People's Republic of)</option>
                <option value="PRK">Korea, Democr.P.R.of</option>
                <option value="THA">Thailand</option>
                <option value="VNM">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>District</label>
              <select className="form-control" value={this.props.district} onChange={this.props.ChangeDistrict}>
                <option value="KHM">Cambodia</option>
                <option value="CHN">China (People's Republic of)</option>
                <option value="PRK">Korea, Democr.P.R.of</option>
                <option value="THA">Thailand</option>
                <option value="VNM">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Commune</label>
              <select className="form-control" value={this.props.commune} onChange={this.props.ChangeCommune}>
                <option value="KHM">Cambodia</option>
                <option value="CHN">China (People's Republic of)</option>
                <option value="PRK">Korea, Democr.P.R.of</option>
                <option value="THA">Thailand</option>
                <option value="VNM">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Village</label>
              <select className="form-control" value={this.props.village} onChange={this.props.ChangeVillage}>
                <option value="KHM">Cambodia</option>
                <option value="CHN">China (People's Republic of)</option>
                <option value="PRK">Korea, Democr.P.R.of</option>
                <option value="THA">Thailand</option>
                <option value="VNM">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>Street English</label>
              <input className="form-control" value={this.props.street} onChange={this.props.ChangeStreet}/>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label>House English</label>
              <input className="form-control" value={this.props.house} onChange={this.props.ChangeHouse}/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Village-Other Khmer</label>
              <input className="form-control" value={this.props.village_other_khm} onChange={this.props.ChangeVillage_Other_Khm}/>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="form-group">
              <label>Village-Other English</label>
              <input className="form-control" value={this.props.village_other_eng} onChange={this.props.ChangeVillage_Other_Eng}/>
            </div>
          </div>

        </div>
        </div>
    )
  }
}

export default Address;