import React,{Component} from 'react';

class Enquiry extends Component{
  render(){
    return(
      <div className="card">
        <div className="row card-body">
          <div className="col-md-4">
            <div className="form-group">
              <label>Enquiry Type *</label>
              <select className="form-control" value={this.props.enquiry_type} onChange={this.props.ChangeEnquiryType}>
                <option value="NA">New Application</option>
                <option value="RV">Review</option>
              </select>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
            <label>Product Type *</label>
            <select className="form-control" value={this.props.product_type} onChange={this.props.ChangeProductType}>
              <option >---Select a Product---</option>
              <option value="MBL">Mobile Phone Loan</option>
              <option value="CPL">Computer Loan</option>
              <option value="MTL">Motor Loan</option>
              <option value="CAL">Car Loan</option>
              <option value="HIL">Home Improvement Loan</option>
              <option value="EDU">Education Loan</option>
              <option value="STL">Staff Loan</option>
              <option value="CDL">Consumer Durables Loan</option>
              <option value="PEL">Personal Loan</option>
              <option value="MRA">Real Estate Loan</option>
              <option value="PHL">Public Housing Loan</option>
              <option value="SHL">Staff Housing Loan</option>
              <option value="WCL">Working Capital Loan</option>
              <option value="AFI">Asset Financing</option>
              <option value="INL">Investment Loan</option>
              <option value="CON">Construction Loan</option>
              <option value="HVL">Home Investment Loan</option>
              <option value="STF">Stock Finance</option>
              <option value="ODF">Overdraft Facility</option>
              <option value="RVL">Revolving Loan</option>
              <option value="SYL">Syndicate Loan</option>
              <option value="AGL">Agriculture Loan</option>
              <option value="MCL">Machinery Loan</option>
              <option value="HEQ">Heavy Equipment Loan</option>
              <option value="TFL">Trade Finance Loan</option>
              <option value="GRL">Green Loan</option>
              <option value="EML">Emergency Loan</option>
              <option value="CMT">Community Loan</option>
              <option value="SCC">Secured Credit Card</option>
              <option value="UCC">Unsecured Credit Card</option>
              <option value="CCC">Combined Credit Card</option>
              <option value="BCC">Business Credit Card</option>
              <option value="MFI">MFI Loan</option>
              <option value="PRL">Private Loan</option>
              <option value="ASL">Association Loan</option>
            </select>
          </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
            <label className="label">Account Type *</label>
            <select className="form-control" value={this.props.account_type} onChange={this.props.ChangeAccountType}>
              <option value="J">Joint</option>
              <option value="S">Single</option>
              <option value="G">Group</option>
            </select>
          </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
            <label>Number of Applicants *</label>
            <select className="form-control" value={this.props.application_no} onChange={this.props.ChangeApplicationNo}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
            <label>Member Reference *</label>
            <input className="form-control" value={this.props.member} onChange={this.props.ChangeMember}/>
          </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
            <label>Amount *</label>
            <input type="number" className="form-control" value={this.props.amount} onChange={this.props.ChangeAmount}/>
          </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
            <label>Currency *</label>
            <select className="form-control" value={this.props.currency} onChange={this.props.ChangeCurrency}>
              <option value></option>
              <option value="KHR">Riel</option>
              <option value="USD">US Dollar</option>
              <option value="THB">Baht</option>
            </select>
          </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
            <label>Scorecard *</label>
            <select className="form-control" value={this.props.scorecard} onChange={this.props.ChangeScorecard}>
              <option value="MFI01">MFI</option>
              <option value="BNK01">Bank</option>
            </select>
          </div>
          </div>

        </div>
        </div>
    )
  }
}

export default Enquiry;