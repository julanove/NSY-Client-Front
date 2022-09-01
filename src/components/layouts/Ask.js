import React, { Component } from 'react';
import { Fragment, useState } from 'react';
import askimage from './../..//images/contactus.png';
import {Contact, DataRPC} from '../../rpc-client/DataRPC';

//Redux
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';

class Ask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            content: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]});
    } 

    handleSubmit = async (e) => {
        e.preventDefault();

        let contactObject = new Contact();
        contactObject.name = this.state.name;
        contactObject.content = this.state.content;
        contactObject.email = this.state.email;
        let result = await new DataRPC().contactNSY(contactObject);

        let a = "Tin nhắn của các bạn đã được chuyển đi, chúng mình sẽ phản hồi trong thời gian sớm nhất <3";
        let b = "white";
        this.setState({name: "", email: "", content: ""});
        this.props.setAlert(a,b);
        
    }

    render() {

        //console.log('render');
        //console.log(this.props.alertType);

        return( 
            <Fragment>
            <section id="intro" className="section intro pb70 res-0">
                
            <div className="text-center page-title p-d-40">
                        <h3 className="txt-upper">LIÊN HỆ</h3>
            </div>

             <div className="container">
                    <section id="contact color-f">
                        <div className="ask-div text-center textheight">
                            <div className="row">
                                <div className="col-md-12 ask_image_margin">
                                    <img src={askimage} className="julaimage img-responsive" alt=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 ask_image_margin font-size-16" >
                                    
                                </div>
                            </div>

                            <form  onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 conForm">
                                        <div id="message"></div>
                                        <input id="nameField" name="name" type="text" value={this.state.name}
                                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12" onChange={this.onChange}
                                            placeholder="Tên" required/>
                                    </div>
                                    <div className="col-md-6 conForm">
                                        <div id="message"></div>
                                        <input id="emailField" name="email" type="text" value={this.state.email}
                                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr" onChange={this.onChange}
                                            placeholder="Email hoặc SĐT" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 conForm">
                                        <div id="message"></div>
                                        <textarea id="messField" name="content"  value={this.state.content}
                                                className="col-xs-12 col-sm-12 col-md-12 col-lg-12" onChange={this.onChange}
                                                placeholder="Thông tin bạn muốn gửi đến chúng mình" required></textarea>
                                        <div id="simple-msg"></div>
                                    </div>
                                </div> 

                                <div className="row">
                                    <div className="col-md-12 conForm">
                                        <div className="col-md-6 col-sm-6 col-xs-6 text-right pl-0">
                                            <input type="submit" id="send" name="send" className="submitBtn common_btn margin-righ-0 "
                                                value="Gửi" />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6 text-left pr-0">
                                            <input type="button" id="clear" name="clear" className="submitBtn common_btn"
                                                value="Làm lại"/>
                                            <div id="simple-msg"></div>
                                        </div>
                                        <div id="message"></div>
                                        <div id="simple-msg"></div>
                                        <h3 id="success-msg" className="text-center nodisplay"></h3>
                                    </div>
                                </div>
                              
                                {this.props.msg ? (
                                    <div className="row">
                                        <div className="col-md-12 conForm">
                                            <div id="message" className={`message-${this.props.alertType}`}> {this.props.msg } </div>
                                            
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                ) : ""}  
                            </form>
                        </div>
                    </section>
                </div>
            </section>

            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        msg: state.alert.msg,
        alertType: state.alert.alertType
    };
}

export default connect(mapStateToProps, {setAlert})(Ask); 