import React, { Component } from 'react';
import { Fragment, useState } from 'react';
import {Product, DataRPC} from '../../rpc-client/DataRPC';
import { configForCurrentEnv } from '../../config/environment';
import $ from 'jquery';
/* import ImageGallery from 'react-image-gallery'; */ 

import scriptLoader from 'react-async-script-loader';

const endpoint = configForCurrentEnv.endpoints.frt;

class Ensou extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.domRef = React.createRef();
    }

    async componentDidMount() {

        window.jQuery('.fotorama')
        .fotorama()
        .data('fotorama')
        .show({index: 5, time: 0});

        //$('#gallery').flickrGallery(2);

        /* const el = ReactDOM.findDOMNode(this.display);
        //$(el).vectorMap({map: 'world_mill_en'});
        $(el).flickrGallery(2); */


        //const el = ReactDOM.findDOMNode(this.domRef);
        //window.$('#addSupModal').modal('show')
        //$(el).flickrGallery(2);
        //window.$(this.productIntro).flickrGallery(2);
        //window.$(this.productIntro).flickrGallery(2);
        
      /*   switch (index)
        {
            case "72157691342047483":
                fotoramaIndex = 0;
                break;
            case "72157705158332932":
                fotoramaIndex = 1;
                break;
            case "72157708640629234":
                fotoramaIndex = 2;
                break;
            case "72157680460727008":
                fotoramaIndex = 3;
                break;
            case "72157678302329767":
                fotoramaIndex = 4;
                break;
            case "72157708641459184":
                fotoramaIndex = 5;
                break;
        } */
      /*   $('.fotorama')
        .fotorama()
        .data('fotorama')
        .show({index: 5, time: 0}); */
  
    }

    render() {


    /*     const images = [
            {
                original: 'https://live.staticflickr.com/65535/33933268388_11df7bbec1_b.jpg',
                thumbnail: 'https://live.staticflickr.com/65535/33933268388_11df7bbec1_b.jpg',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
            ]; */

        return( 
            <Fragment>
            <section id="events" className="section teams t70 ensou-style">
                <div className="main_content text-center textheight">

                    <div className="section-header">
                        <h2 className="wow fadeInDown animated"> .
                        {/* <!--      <?php echo $trans[0]['product']['video']; ?> --> */}
                        </h2> 
                        <p className="wow fadeInDown animated"> .
                          {/*   <!-- <?php echo $trans[0]['product']['quote']; ?> --> */}
                        </p> 
                        <hr className="line-white-left"/>
                    </div>

                    {/* <ImageGallery items={images} /> */}

                    {/* <Fotorama>
                        <img src="https://s.fotorama.io/1.jpg"/>
                        <img src="https://s.fotorama.io/2.jpg"/>
                    </Fotorama> */}

                    <div className="fotorama"  ref={el => this.productIntro2 = el} data-width="100%"  data-nav="thumbs" data-allowfullscreen="true" data-transition="slide" data-clicktransition="crossfade" data-loop="true" data-auto="false">
                        <a href="https://www.youtube.com/watch?v=tGhVBPOiTac" data-caption="2019 - Saku">
                            <img src=""/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=lWY502Pl28U" data-caption="2018 - Nguyệt Hạ Phiêu Hải">
                            <img src="https://live.staticflickr.com/65535/47085164704_c777e07fa3_b.jpg"/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=1wiZYmELLZ4" data-caption="2017 - Hoa Long Nhất Vũ">
                            <img src="https://live.staticflickr.com/65535/46958281065_cd0f296384_b.jpg"/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=Rqpvm3wFTso" data-caption="2016 - Shinki Kyougetsu">
                            <img src="https://live.staticflickr.com/65535/46958328315_2274659be0_b.jpg"/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=hxFCTecnoOc" data-caption="2015 - Shunki Mushin">
                            <img src="https://live.staticflickr.com/65535/48255252991_f4455f3972_b.jpg"/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=JSenau2yGaQ" data-caption="2014 - Mugen 12">
                            <img src="https://live.staticflickr.com/65535/40908322573_5e3b5327c8_b.jpg"/>
                        </a>
                    </div>  
                </div>
            </section>

            <section id="event" className="section teams ptb100 ">
                <div className="container">
                    <div className="section-header">
                        <h2 className="wow fadeInDown animated">
                           {/*  <?php echo $trans[0]['product']['gallery']; ?> */}
                        </h2>
                        <hr className="line-white-left ensou-none"/>
                    </div>

                    <div id="tabs">
                        <div id="tab-1" className="tab-content current">
                            <div className="content">
                                <div className="niceGallery" id="gallery"  ref={el => this.productIntro = el} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="section fb_comment no-padding">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div id="disqus_thread"></div>
                        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                    </div>
                </div>
            </section>
            </Fragment>
        );
    }

}

export default (Ensou);