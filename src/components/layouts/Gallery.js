import React, { Component } from 'react';
import { Fragment, useState } from 'react';
import $ from 'jquery';
import GalleryLatest from './GalleryLatest';
import "../../css/gallery.css";
import {Product, DataRPC} from '../../rpc-client/DataRPC';
import { configForCurrentEnv } from '../../config/environment';

window.$ = $;
const endpoint = configForCurrentEnv.endpoints.frt;

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            content: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openPage = this.openPage.bind(this);
      }

    onChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]});
    } 

    openPage = (pageName, hr) => {

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }
        $(".button-hr").each(function(index) {
            this.style.display = "none";
        });

        if(document.querySelector(".tabcontent") && document.getElementById(pageName))
        {
            document.querySelector(".tablink").style.display = "none";
            document.getElementById(pageName).style.display = "block";
            document.getElementById(hr).style.display = "block";
        }
        
    }

    async componentDidMount() {
        let data = "";
        new DataRPC().fetchData('fetchProduct', Product).then(gData => {

            gData.forEach(x => {
                data += " <div class='shin package wow fadeInLeft animated' data-wow-offset='250' data-wow-delay='200ms'> " +
                               " <img class='fitimage' src='"+ x.ava + "'> " + 
                                   " <a href='" + endpoint + "product?id=" + x.id + "'> " + 
                                   " <div class='layer'> " + 
                                       " <div class='layer-txt'> " +
                                           " <span class='img-txt'>" + x.name + "</span> " +
                                           " <h5> " + x.description + " </h5> " + 
                                       " </div> " +
                                   " </div> " +
                               " </a> " +
                           " </div>"; 
             });

             $("#gallery-album").append(data); 

        }).catch(e => {
            console.log(e);
        });

        console.log(endpoint);

        // ------------ Load Video

        var strData = "";
        let i = '';
        let c = 0;

        new DataRPC().fetchRawData('fetchVideoDetails').then(vData => {

            vData.forEach(x => {  

                if (c == 0) // dòng 0 
                {
                    strData += " <div class='row mb-20'> " +
                                " <h4 class='video-valbum-title'>" + x.video_name + "</h4> " +
                                " <hr class='video-hr'> " +
                                " <div class='video-package'> ";
                }
    
                if (c != 0 && i != x.video_id) // dòng 0 
                {
                    console.log('2');
                    console.log('2 - ' + i + ' - ' + c);
                    strData += " </div> " +
                        " </div>";
    
                    strData += " <div class='row mb-20'> " +
                                " <h4 class='video-valbum-title'>" + x.video_name + "</h4> " +
                                " <hr class='video-hr'> " +
                                " <div class='video-package'> ";
                }
    
                console.log('3');
                strData += " <div class='video-img'> " +
                                " <div class='video-container'> " +
                                    " <a class='normal-link' target='_blank' href='" + x.reference_video_link + "'> <img class='fitimage' src='" + x.reference_image_link + "'> </a>" +
                                " </div> " +
                                " <div class='video-title'><a class='normal-link' target='_blank' href='" + x.reference_video_link + "'>" + x.reference_name + "</a></div> " +
                            " </div> ";
            
    
                i = x.video_id;
                c++;
       
            });

            strData += " </div> " +
                    " </div>";

            $("#gallery-video").append(strData);
        }).catch(e => {
            console.log(e);
        });

        document.getElementById("defaultOpen").click();
    }
    

    handleSubmit = async (e) => {
        e.preventDefault();
        let a = "Tin nhắn của các bạn đã được chuyển đi, chúng mình sẽ phản hồi trong thời gian sớm nhất <3";
        let b = "white";
        this.setState({name: "", email: "", content: ""});
        //this.props.setAlert(a,b);
    }

    render() {

        console.log('render');
        //console.log(this.props.alertType);

        return( 
            <Fragment>
                
                <section id="intro" className="section intro pb70 intro-style">
                <div className="main_content text-center textheight">
                    <div className="row">
                        <div className="tab-area">
                            <button className="tablink" onClick={() => this.openPage('lastest', 'hr-1')}>
                                LATEST<br/><hr className="button-hr" id="hr-1"/></button>
                            <button className="tablink" onClick={() => this.openPage('album', 'hr-2')} id="defaultOpen">
                                ALBUM<br/><hr className="button-hr" id="hr-2"/></button>
                            <button className="tablink" onClick={() => this.openPage('video', 'hr-3')}>
                                VIDEO<br/><hr className="button-hr" id="hr-3"/></button> 
                        </div>
                    </div>
                    <div className="row">
                        <div id="lastest" className="tabcontent">
                            <GalleryLatest/>
                        </div>

                        <div id="album" className="tabcontent">
                            
                            <div className="gallery-container" id="gallery-album">
                            </div>
                        </div>
                        <div id="video" className="tabcontent">
                            
                            <div className="" id="gallery-video">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Fragment>
        )
    }

}

export default Gallery;