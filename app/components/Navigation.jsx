var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
	return (
		<div className="top-bar">
			<div className="tob-bar-left">
				<ul className="menu">
			      <li className="menu-text">React Time App</li>
			      <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
			      <li><Link to="/" activeClassName="active-link">Countdown</Link></li>
			    </ul>
			</div>
			<div className="tob-bar-right">
				<ul className="menu">
					<li className="menu-text">
						Created by <a href="https://github.com/Maksim94">Maxim</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Navigation;