import React, { Component } from 'react';
import { Fragment } from 'react';

class Schedule extends React.Component {

    render() {
        return( 
            <Fragment>
                <section id="intro" className="section intro pb70 res-0">

                    <div className="text-center page-title p-d-40">
                        <h3 className="txt-upper">LỊCH HOẠT ĐỘNG</h3>
                    </div>

                    <div className="text-center textheight sche-container">
                        <hr className="line-white-left" id="news_nsy" />
                        
                        <div class="table100 ver1 m-b-110">
                            <div class="table100-head">
                                <table>
                                    <thead>
                                        <tr class="row100 head">
                                            <th class="cell100 jcolumn1 text-center">ĐỊA ĐIỂM</th>
                                            <th class="cell100 column2 text-center">THỜI GIAN</th>
                                            <th class="cell100 column3 text-center">SỰ KIỆN</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div class="table100-body js-pscroll">
                                <table>
                                    <tbody id="schedule1">
                                        <tr id="content"></tr><tr class="row100 body">
                                            <td class="cel100 jcolumn1">Hà Nội</td>
                                            <td class="cell100 column2">25/4/2021</td>
                                            <td class="cell100 column3">Vietnam Yosakoi Festival 2021 Vietnam Yosakoi Festival 2021 Vietnam Yosakoi Festival 2021 Vietnam Yosakoi Festival 2021 Vietnam Yosakoi Festival 2021 <a> https://dantri.com.vn </a></td>
                                            </tr>
                                        <tr class="row100 body"><td class="cel100 jcolumn1">Hà Nội</td><td class="cell100 column2">18/8/2019</td><td class="cell100 column3">Japan Wave Festival 2019</td></tr><tr class="row100 body"><td class="cel100 jcolumn1">Hạ Long</td><td class="cell100 column2">27-28/7/2019</td><td class="cell100 column3">Lễ hội Mặt Trời Mọc 2019</td></tr><tr class="row100 body"><td class="cel100 jcolumn1">Hạ Long</td><td class="cell100 column2">6-7/7/2019</td><td class="cell100 column3">Lễ hội Mặt Trời Mọc 2019</td></tr><tr class="row100 body"><td class="cel100 jcolumn1">Hà Nội</td><td class="cell100 column2">6/4/2019</td><td class="cell100 column3">Ngày hội Mặt Trời</td></tr><tr class="row100 body"><td class="cel100 jcolumn1">Hà Nội</td><td class="cell100 column2">30-31/3/2019</td><td class="cell100 column3">Lễ hội hoa anh đào Nhật Bản - Hà Nội 2019</td></tr>
                                        <script id="myScript" src="https://spreadsheets.google.com/tq?tqx=responseHandler:doData;out:json-in-script&amp;key=1CgJdrA88T8mAsKVSqNrPn08YJQxOYirmUAo4-x-LB6U&amp;gid=943933030"></script>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </section>
            </Fragment>
        )
    }

}

export default Schedule;