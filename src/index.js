import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends Component {
	state = {
		lat: null,
		errorMsg: '',
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(pos) => {
				this.setState({
					lat: pos.coords.latitude,
				});
			}, //console.log(pos),
			(err) => {
				this.setState({
					errorMsg: err.message,
				});
			}, //console.log(err),
		);
	}

	renderContent() {
		if (this.state.lat && !this.state.errorMsg) {
			return (
				<div>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		}

		if (!this.state.lat && this.state.errorMsg) {
			return (
				<div>
					<h3>Hi Seasons!!!</h3>
					Error: {this.state.errorMsg}
				</div>
			);
		}

		return (
			<div>
				<div>
					Loading Season <i className='spinner loading icon'></i>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
