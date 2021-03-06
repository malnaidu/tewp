import React, {Component} from 'react';
import styles from './UserPage.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import UserTable from '../../components/UserTable';


export default class UserPage extends Component {
	render() {
		return (
			<div>
				<Navbar/>
	            <br/>
				<br/>
				<div className={styles.titleBanner}>
                	<span className={styles.title}>Your Tickets</span>
           	 	</div>

	            <div className={styles.container}>
	            	<LeftSideNav/>
	            		<UserTable/>
	            </div>

	            <hr/>
                <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
                <br/>
                <br/>
            </div>
		);
	}
}