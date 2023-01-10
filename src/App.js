import './App.css';
import { Fragment } from 'react';
import Dragon from './components/layouts/Dragon';
import AboutTeam from './components/layouts/AboutTeam';
import News from './components/layouts/News';
import Schedule from './components/layouts/Schedule';
import Nav from './components/layouts/Nav';
import Ask from './components/layouts/Ask'; 
import Gallery from './components/layouts/Gallery';
import Ensou from './components/layouts/Ensou'; 
import Calendar from './components/layouts/Calendar';
import Footer from './components/layouts/Footer';
import Login from './components/admin/Login';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import  './css/main.css';
import  './css/responsive.css';
import  './css/font-icon.css';
import  './css/animate.min.css';
import  './css/jquery.fancybox.css';
import  './css/flexslider.css';
import  './css/bootstrap.min.css';
import  './css/schedule.css';

import {Provider} from 'react-redux';
import store from './store';


const Viewer = ({match}) => (
    <Fragment>
            <Route exact path={`${match.path}`} component={Dragon}/>
             <Nav/>
                <Switch>
                    <Route exact path={`${match.path}/home`} component={Login} />
                    <Route exact path='/about-us' component={AboutTeam} />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/ask' component={Ask} /> 
                    <Route exact path='/schedule' component={Schedule} /> 
                    <Route exact path='/gallery' component={Gallery} />
                </Switch>
            <Footer/> 
    </Fragment>
);

const Admin = ({match}) => (
    <Fragment>
           <Switch>
                <Route exact path='/home' component={Dragon} /> 
                <Route exact path={`${match.path}`} component={Login} />
                <Route exact path={`${match.path}/home2`} component={Dragon} />
                <Route exact path={`${match.path}/about-us`} component={Login} />
                <Route exact path={`${match.path}/about-us`} component={Login} />
            </Switch>
    </Fragment>
);



const App = () => (
    <Provider store={store} >
        <Router>
           <Switch>
               <Route  path='/admin' component={Admin} /> 
               <Route  path='/' component={Viewer} />
           </Switch>
        </Router>
    </Provider>
);


export default App;
