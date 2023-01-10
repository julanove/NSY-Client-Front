import React, { Component } from 'react';
import { Fragment } from 'react';
import {Product, DataRPC} from '../../rpc-client/DataRPC';
import ReactHtmlParser from "react-html-parser";

class AboutTeam extends React.Component {

    constructor() {
        super();
        this.state = {
            content: ''
        }
    }

    async componentDidMount() {

        var disqus_config = function () {
            this.page.url = window.location.origin + "/about-team";  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = window.location.origin + "/about-team"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };

        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://nui-truc-sakura-yosakoi.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();

        new DataRPC().fetchRawData('GetAboutUs').then(gData => { 
            console.log('----------GET DATA--------');
            console.log(gData);
            if (gData.content) {
                this.setState({content: gData.content});
            }
        });
    }

    render() {
        return( 
            <Fragment>
                
                <section id="intro" className="section intro pb70 res-0">

                    <div className="text-center page-title p-d-40">
                                <h3 className="txt-upper">VỀ CHÚNG TÔI</h3>
                    </div>
                    <div className="container">
                        <div className="main_content text-center textheight">

                            {ReactHtmlParser(this.state.content)}

                                {/* <p>
                                Núi Trúc Sakura Yosakoi là đội múa Yosakoi đầu tiên tại Việt Nam, trực thuộc Trung tâm tiếng Nhật Núi Trúc Sugi Ryotaro và Hội giao lưu văn hóa Việt Nam – Nhật Bản (VIJACA). Đội được thành lập vào năm 2007, dưới sự hỗ trợ từ Trung tâm tiếng Nhật Núi Trúc, đặc biệt là sự giúp đỡ nhiệt tình từ Tiến sĩ Vũ Khắc Liên – Chủ tịch Hội giao lưu văn hóa Việt – Nhật kiêm Giám đốc Trung tâm, cùng sự nỗ lực phấn đấu không ngừng của toàn thể các thành viên trong đội. </p>

                                <img  class="img-responsive julaimagenorborder" src="https://live.staticflickr.com/65535/33933268388_11df7bbec1_b.jpg"/>

                                <p>  Dòng 1 </p>

                                <img  class="img-responsive julaimagenorborder" src="https://live.staticflickr.com/65535/33933268388_11df7bbec1_b.jpg"/>  */}
                                
                        </div>
                    </div>
                </section>

                <section id="testimonials" class="section fb_comment no-padding">
                    <div class="container">
                        <div class="col-md-8 col-md-offset-2 text-center">
                            <div id="disqus_thread"></div>
                            <script>
                                
                            </script>
                            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }

}

export default AboutTeam;