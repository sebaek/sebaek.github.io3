var Main = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
			<h1>
			Hello, World!
			</h1>
			<p>
			Something like description......
			</p>
			<p><a className="btn btn-primary btn-lg" href="#" role="button">Get List</a></p>

			</div>
		);
	}
});


ReactDOM.render(
	<Main />,
	document.getElementById('content')
);