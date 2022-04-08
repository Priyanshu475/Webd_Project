import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://api.metals.live/v1/spot")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (

		<div className = "App">

			<div className='a'>
			<h1> GOLD PRICE(₹/g) </h1> {
				items.map((item) => (
				<ol key = { item.timestamp} >
					 <h2>{ item.gold}</h2>
					 
					 
					</ol>))}
					
					</div>
			<div className='b'>
			<h1> SILVER PRICE(₹/g) </h1> {
				items.map((item) => (
				<ol key = { item.timestamp} >
					 <h2>

					 { item.silver}
					 </h2>
					 
					</ol>))}
					</div>
			<div className="c">
		
          <h1> PLATINUM PRICE(₹/g) </h1> {
				items.map((item) => (
				<ol key = { item.timestamp} >
					<h2>

					 { item.platinum}
					</h2>
					</ol>))}
          	</div>
		
		</div>
	);
}
}

export default App;
