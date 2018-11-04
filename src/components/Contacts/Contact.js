import React, {Component} from 'react';

class Contact extends Component{
  render(){
    return(
      <div className="card">
        <h5 className="card-header">Contact Details</h5>
        <div className="row card-body">

          {/* <div className="col-md-2">
            <div className="form-group">
              <label>Phone Number Type *</label>
              <select className="form-control" value={this.props.phone_number_type} onChange={this.props.ChangePhoneNumberType}>
                <option value="O">Office</option>
                <option value="F">Fax</option>
                <option value="H">Home</option>
                <option value="M" selected>Mobile</option>
                <option value="U">Unknown</option>
              </select>
            </div>
          </div>
          
          <div className="col-md-2">
            <div className="form-group">
              <label>Country Code *</label>
              <select className="form-control" value={this.props.country_code} onChange={this.props.ChangeCountryCode}>
                <option value="855" selected>Cambodia (855)</option>
              </select>
            </div>
          </div> */}

          {/* <div className="col-md-2">
            <div className="form-group">
              <label>Area Code</label>
              <select className="form-control" value={this.props.area_code} onChange={this.props.ChangeAreaCode}>
              <option value></option>
                  <option value="023">023</option>
                  <option value="024">024</option>
                  <option value="025">025</option>
                  <option value="026">026</option>
                  <option value="032">032</option>
                  <option value="033">033</option>
                  <option value="034">034</option>
                  <option value="035">035</option>
                  <option value="036">036</option>
                  <option value="042">042</option>
                  <option value="043">043</option>
                  <option value="044">044</option>
                  <option value="052">052</option>
                  <option value="053">053</option>
                  <option value="054">054</option>
                  <option value="055">055</option>
                  <option value="062">062</option>
                  <option value="063">063</option>
                  <option value="064">064</option>
                  <option value="065">065</option>
                  <option value="072">072</option>
                  <option value="073">073</option>
                  <option value="074">074</option>
                  <option value="075">075</option>
              </select>
            </div>
          </div> */}

          <div className="col-md-3">
            <div className="form-group">
              <label>Phone Number *</label>
              <input className="form-control" value={this.props.phone_number} onChange={this.props.ChangePhoneNumber} required/>
            </div>
          </div>

          {/* <div className="col-md-3">
            <div className="form-group">
              <label>Extension</label>
              <input className="form-control" value={this.props.extension} onChange={this.props.ChangeExtension}/>
            </div>
          </div> */}

        </div>
        </div>
    )
  }
}

export default Contact;