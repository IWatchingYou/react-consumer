import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUpdateConsumer, fetchConsumers } from '../actions/consumerActions';

import Enquiry from '../components/Enquirys/Enquiry';
import Consumer from '../components/Consumers/Consumer';
import Address from '../components/Address/Address';
import Contact from '../components/Contacts/Contact';
import Occupation from '../components/Occupations/Occupation';

class EnquiryformUpdate extends Component{
  state = {
    enq_type: 'NA',
    pro_type: '',
    acc_type: 'J',
    number_app: '1',
    member: '',
    amount: '',
    currency: 'USD',
    scorecard: 'MFI01',
    app_type: 'P',
    id_type: 'N',
    id_number: '',
    id_expire: '',
    gender: 'M',
    marital_status: 'M',
    dob: '',
    pob_prov: '',
    pob_dist: '',
    pob_comm: '',
    faname_eng: '',
    finame_eng: '',
    faname_khm: '',
    finame_khm: '',
    email_address: '',
    add_type: 'RESID',
    province: '',
    district: '',
    commune: '',
    village: '',
    street: '',
    house: '',
    other_vill_eng: '',
    other_vill_khm: '',
    phone_number: '',
    emp_type: '',
    emp_self: '',
    lenght: '',
    occupation: '',
    emp_name: '',
    salary: '',
    emp_currency: 'USD',
    emp_add_type: '',
    emp_prov: '',
    emp_dist: '',
    emp_comm: '',
    emp_vill: '',
    emp_street: '',
    emp_house: '',
    empother_vill_eng: '',
    empother_vill_khm: ''
  }

  ChangeEnquiryType = (event) =>{
    this.setState({ enq_type: event.target.value })
  }

  ChangeProductType = (event) =>{
    this.setState({ pro_type: event.target.value })
  }

  ChangeAccountType = (event) =>{
    this.setState({ acc_type: event.target.value })
  }

  ChangeApplicationNo = (event) =>{
    this.setState({ number_app: event.target.value })
  }

  ChangeMember = (event) =>{
    this.setState({ member: event.target.value })
  }

  ChangeAmount = (event) =>{
    this.setState({ amount: event.target.value })
  }

  ChangeCurrency = (event) =>{
    this.setState({ currency: event.target.value })
  }

  ChangeScorecard = (event) =>{
    this.setState({ scorecard: event.target.value })
  }

  ChangeApplication_Type = (event) =>{
    this.setState({ app_type: event.target.value })
  }

  ChangeID_Type = (event) =>{
    this.setState({ id_type: event.target.value })
  }

  ChangeID_Number = (event) =>{
    this.setState({ id_number: event.target.value })
  }

  ChangeID_Expiry_Date = (event) =>{
    this.setState({ id_expire: event.target.value })
  }

  ChangeGender = (event) =>{
    this.setState({ gender: event.target.value })
  }

  ChangeMarital_Status = (event) =>{
    this.setState({ marital_status: event.target.value })
  }

  ChangeBirth_Date = (event) =>{
    this.setState({ dob: event.target.value })
  }

  ChangePBP = (event) =>{
    this.setState({ pob_prov: event.target.value })
  }

  ChangePBD = (event) =>{
    this.setState({ pob_dist: event.target.value })
  }

  ChangePBC = (event) =>{
    this.setState({ pob_comm: event.target.value })
  }

  ChangeFaname_Eng = (event) =>{
    this.setState({ faname_eng: event.target.value })
  }

  ChangeFiname_Eng = (event) =>{
    this.setState({ finame_eng: event.target.value })
  }

  ChangeFaname_Khm = (event) =>{
    this.setState({ faname_khm: event.target.value })
  }

  ChangeFiname_Khm = (event) =>{
    this.setState({ finame_khm: event.target.value })
  }

  ChangeEmail_Address = (event) =>{
    this.setState({ email_address: event.target.value })
  }

  ChangeAddress_Type = (event) =>{
    this.setState({ add_type: event.target.value })
  }

  ChangeProvince = (event) =>{
    this.setState({ province: event.target.value })
  }

  ChangeDistrict = (event) =>{
    this.setState({ district: event.target.value })
  }

  ChangeCommune = (event) =>{
    this.setState({ commune: event.target.value })
  }

  ChangeVillage = (event) =>{
    this.setState({ village: event.target.value })
  }

  ChangeStreet = (event) =>{
    this.setState({ street: event.target.value })
  }

  ChangeHouse = (event) =>{
    this.setState({ house: event.target.value })
  }

  ChangeVillage_Other_Khm = (event) =>{
    this.setState({ other_vill_khm: event.target.value })
  }

  ChangeVillage_Other_Eng = (event) =>{
    this.setState({ other_vill_eng: event.target.value })
  }

  ChangePhoneNumber = (event) =>{
    this.setState({ phone_number: event.target.value })
  }

  onChangeEmploymentType = (event) =>{
    this.setState({ emp_type: event.target.value })
  }

  onChangeSelfEmployed = (event) =>{
    this.setState({ emp_self: event.target.value })
  }

  onChangeLenght = (event) =>{
    this.setState({ lenght: event.target.value })
  }

  onChangeOccupation = (event) =>{
    this.setState({ occupation: event.target.value })
  }

  onChangeEmployerName = (event) =>{
    this.setState({ emp_name: event.target.value })
  }

  onChangeSalary = (event) =>{
    this.setState({ salary: event.target.value })
  }

  onChangeCurrency = (event) =>{
    this.setState({ emp_currency: event.target.value })
  }

  onChangeEmpAddress = (event) =>{
    this.setState({ emp_add_type: event.target.value })
  }

  onChangeEmpProvince = (event) =>{
    this.setState({ emp_prov: event.target.value })
  }

  onChangeEmpDistrict = (event) =>{
    this.setState({ emp_dist: event.target.value })
  }

  onChangeEmpCommune = (event) =>{
    this.setState({ emp_comm: event.target.value })
  }

  onChangeEmpVillage = (event) =>{
    this.setState({ emp_vill: event.target.value })
  }

  onChangeEmpStreet = (event) =>{
    this.setState({ emp_street: event.target.value })
  }

  onChangeEmpHouse = (event) =>{
    this.setState({ emp_house: event.target.value })
  }

  onChangeEmpVillageEng = (event) =>{
    this.setState({ empother_vill_eng: event.target.value })
  }

  onChangeEmpVillageKhm = (event) =>{
    this.setState({ empother_vill_khm: event.target.value })
  }

  onSubmit = (event) =>{
    event.preventDefault();
    
    this.props.fetchUpdateConsumer(this.props.match.params.id ,this.state);
    setTimeout(()=>{
      this.props.fetchConsumers(1);
    },500)
    this.props.history.push('/list');
  }

  componentWillMount(){
    if(this.props.match.params.id !== undefined){
      fetch(`http://192.168.111.143:9999/api/consumer/${this.props.match.params.id}`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(consumer =>{
        this.setState({
          enq_type: consumer.enq_type,
          pro_type: consumer.pro_type,
          acc_type: consumer.acc_type,
          number_app: consumer.number_app,
          member: consumer.member,
          amount: consumer.amount,
          currency: consumer.currency,
          scorecard: consumer.scorecard,
          app_type: consumer.app_type,
          id_type: consumer.id_type,
          id_number: consumer.id_number,
          id_expire: `${consumer.id_expire.split('-')[0]}-${consumer.id_expire.split('-')[1]}-${consumer.id_expire.split('-')[2].substring(0,2)}`,
          gender: consumer.gender,
          marital_status: consumer.marital_status,
          dob: `${consumer.dob.split('-')[0]}-${consumer.dob.split('-')[1]}-${consumer.dob.split('-')[2].substring(0,2)}`,
          pob_prov: consumer.pob_prov,
          pob_dist: consumer.pob_dist,
          pob_comm: consumer.pob_comm,
          faname_eng: consumer.faname_eng,
          finame_eng: consumer.finame_eng,
          faname_khm: consumer.faname_khm,
          finame_khm: consumer.finame_khm,
          email_address: consumer.email_address,
          add_type: consumer.add_type,
          province: consumer.province,
          district: consumer.district,
          commune: consumer.commune,
          village: consumer.village,
          street: consumer.street,
          house: consumer.house,
          other_vill_eng: consumer.other_vill_eng,
          other_vill_khm: consumer.other_vill_khm,
          phone_number: consumer.phone_number,
          emp_type: consumer.emp_type,
          emp_self: consumer.emp_self,
          lenght: consumer.lenght,
          occupation: consumer.occupation,
          emp_name: consumer.emp_name,
          salary: consumer.salary,
          emp_currency: consumer.emp_currency,
          emp_add_type: consumer.emp_add_type,
          emp_prov: consumer.emp_prov,
          emp_dist: consumer.emp_dist,
          emp_comm: consumer.emp_comm,
          emp_vill: consumer.emp_vill,
          emp_street: consumer.emp_street,
          emp_house: consumer.emp_house,
          empother_vill_eng: consumer.empother_vill_eng,
          empother_vill_khm: consumer.empother_vill_khm
        })});
    }
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
      <div className="container-flud">
        <h4>Consumer Enquiry - Consumer Personal Details</h4>
        <hr/>
        <h5>Consumer Details</h5>
        <Enquiry 
          enquiry_type={this.state.enq_type}
          product_type={this.state.pro_type}
          account_type={this.state.acc_type}
          application_no={this.state.number_app}
          member={this.state.member}
          amount={this.state.amount}
          currency={this.state.currency}
          scorecard={this.state.scorecard}
          ChangeEnquiryType={this.ChangeEnquiryType}
          ChangeProductType={this.ChangeProductType}
          ChangeAccountType={this.ChangeAccountType}
          ChangeApplicationNo={this.ChangeApplicationNo}
          ChangeMember={this.ChangeMember}
          ChangeAmount={this.ChangeAmount}
          ChangeCurrency={this.ChangeCurrency}
          ChangeScorecard={this.ChangeScorecard}
        />
        <hr/>
        <Consumer
          application_type={this.state.app_type}
          id_type={this.state.id_type}
          id_number={this.state.id_number}
          id_expiry_date={this.state.id_expire}
          gender={this.state.gender}
          marital_status={this.state.marital_status}
          birth_date={this.state.dob}
          pbp={this.state.pob_prov}
          pbd={this.state.pob_dist}
          pbc={this.state.pob_comm}
          faname_eng={this.state.faname_eng}
          finame_eng={this.state.finame_eng}
          faname_khm={this.state.faname_khm}
          finame_khm={this.state.finame_khm}
          email_address={this.state.email_address}
          ChangeApplication_Type={this.ChangeApplication_Type}
          ChangeID_Type={this.ChangeID_Type}
          ChangeID_Number={this.ChangeID_Number}
          ChangeID_Expiry_Date={this.ChangeID_Expiry_Date}
          ChangeGender={this.ChangeGender}
          ChangeMarital_Status={this.ChangeMarital_Status}
          ChangeBirth_Date={this.ChangeBirth_Date}
          ChangePBP={this.ChangePBP}
          ChangePBD={this.ChangePBD}
          ChangePBC={this.ChangePBC}
          ChangeFaname_Eng={this.ChangeFaname_Eng}
          ChangeFiname_Eng={this.ChangeFiname_Eng}
          ChangeFaname_Khm={this.ChangeFaname_Khm}
          ChangeFiname_Khm={this.ChangeFiname_Khm}
          ChangeEmail_Address={this.ChangeEmail_Address}
        />
        <hr/>
        <Address
          address_type={this.state.add_type}
          province={this.state.province}
          district={this.state.district}
          commune={this.state.commune}
          village={this.state.village}
          street={this.state.street}
          house={this.state.house}
          village_other_khm={this.state.other_vill_khm}
          village_other_eng={this.state.other_vill_eng}
          ChangeAddress_Type={this.ChangeAddress_Type}
          ChangeProvince={this.ChangeProvince}
          ChangeDistrict={this.ChangeDistrict}
          ChangeCommune={this.ChangeCommune}
          ChangeVillage={this.ChangeVillage}
          ChangeStreet={this.ChangeStreet}
          ChangeHouse={this.ChangeHouse}
          ChangeVillage_Other_Khm={this.ChangeVillage_Other_Khm}
          ChangeVillage_Other_Eng={this.ChangeVillage_Other_Eng}
        />
        <hr/>
        <Contact
          phone_number={this.state.phone_number}
          ChangePhoneNumber={this.ChangePhoneNumber}
        />
        <hr/>
        <Occupation
          employment_type={this.state.emp_type}
          self_employed={this.state.emp_self}
          lenght={this.state.lenght}
          occupation={this.state.occupation}
          employer_name={this.state.emp_name}
          salary={this.state.salary}
          currency={this.state.emp_currency}
          emp_address={this.state.emp_add_type}
          emp_prov={this.state.emp_prov}
          emp_dist={this.state.emp_dist}
          emp_comm={this.state.emp_comm}
          emp_vill={this.state.emp_vill}
          emp_street={this.state.emp_street}
          emp_house={this.state.emp_house}
          emp_vill_eng={this.state.empother_vill_eng}
          emp_vill_khm={this.state.empother_vill_khm}
          onChangeEmploymentType={this.onChangeEmploymentType}
          onChangeSelfEmployed={this.onChangeSelfEmployed}
          onChangeLenght={this.onChangeLenght}
          onChangeOccupation={this.onChangeOccupation}
          onChangeEmployerName={this.onChangeEmployerName}
          onChangeSalary={this.onChangeSalary}
          onChangeCurrency={this.onChangeCurrency}
          onChangeEmpAddress={this.onChangeEmpAddress}
          onChangeEmpProvince={this.onChangeEmpProvince}
          onChangeEmpDistrict={this.onChangeEmpDistrict}
          onChangeEmpCommune={this.onChangeEmpCommune}
          onChangeEmpVillage={this.onChangeEmpVillage}
          onChangeEmpStreet={this.onChangeEmpStreet}
          onChangeEmpHouse={this.onChangeEmpHouse}
          onChangeEmpVillageEng={this.onChangeEmpVillageEng}
          onChangeEmpVillageKhm={this.onChangeEmpVillageKhm}
        />
        <hr/>
        <button className="btn btn-primary">Save</button>
      </div>
      </form>
    )
  }
}

export default connect(null, { fetchUpdateConsumer, fetchConsumers })(EnquiryformUpdate);