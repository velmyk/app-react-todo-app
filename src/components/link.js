import FlatButton from 'material-ui/lib/flat-button';
import React from 'react';

export const Link = ({
	active,
	children,
	onClick
}) => {
	if(active) {
		return <FlatButton primary={true}>{children}</FlatButton>
	}
	return (
		<FlatButton href='#'
		   	onClick={e => {
		   		e.preventDefault();
		   		onClick();
		   	}}
		>
			{children}
		</FlatButton>
	);
};
