import React from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import FAQ from '../Components/FAQ/FAQ';
import Tabs from '../Components/Tabs/Tabs';
import Footer from '../Components/Footer/Footer';


export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header/>

				<Hero />
				<FAQ />
				<Tabs />

				<hr />
				<Footer />
			</React.Fragment>
		)
	}
}
