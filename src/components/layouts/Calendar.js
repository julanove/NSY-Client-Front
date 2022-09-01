import React from 'react';
import { Fragment } from 'react';
import {DataRPC} from '../../rpc-client/DataRPC';
import * as moment from 'moment';

class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            schedule: []
        };

    }

    async componentWillMount() {
        let schedule = await new DataRPC().fetchData('fetchCalendar', Calendar);
        this.setState({ schedule });
       // this.props.addItem({ schedule });
    }

    listSchedule = () => {
        let list = [];
        this.state.schedule.forEach(sche => {
            list.push(<tr className="row100 body" key={sche.id}>
            <td className="cell100 jcolumn1" > {sche.name} </td>
            <td className="cell100 jcolumn2"> {moment(sche.time).format('DD-MM-YYYY')} </td> 
            <td className="cell100 jcolumn3"> {sche.description} </td></tr>);
        });
        return list;
    }

    render() {

        return( 
            <Fragment>
            
            <section id="intro" className="section intro pb70 res-0 intro-style">
                <div className="container" >
                    <div className="main_content text-center textheight">
                        <hr className="line-white-left" id="about_nsy"/>
                        <div className="table100 ver1 m-b-110">
                            <div className="table100-head">
                                <table>
                                    <thead>
                                        <tr className="row100 head">
                                            <th className="cell100 jcolumn1 text-center">Địa điểm</th>
                                            <th className="cell100 jcolumn2 text-center">Thời gian</th>
                                            <th className="cell100 jcolumn3 text-center">Sự kiện</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div className="table100-body js-pscroll">
                                <table>
                                    <tbody id="schedule1">
                                         {this.listSchedule()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Fragment>
        )
    }
}

export default Calendar;