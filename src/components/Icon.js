import React, { Component } from 'react';

import IconsList from './IconsList';

class Icon extends Component {
	constructor (props) {
		super(props);
		this.icon = IconsList[props.name];
		this.renderFunction = Array.isArray(this.icon.path) ? this.createMutiPathsIcon : this.createSinglePathIcon;
	}

	createMutiPathsIcon = () => {
		return this.icon.path.map((path_item, index) => {
			return <path key={index} fill={path_item.fill || '#000'} d={path_item.d} />;
		});
	}

	createSinglePathIcon = () => {
		return (
			<path fill={this.props.fill || this.icon.path.fill} d={this.icon.path.d} />
		);
	}

	render () {
		return (
			<svg style={this.props.styles} width={this.props.width || this.icon.size.width} height={this.props.height || this.icon.size.height} viewBox={this.icon.viewbox} className={this.props.className}>        
				{ this.renderFunction() }
			</svg>
		);
	}
}

export default Icon;
