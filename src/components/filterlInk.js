import { connect } from 'react-redux';

import { Link } from './link';

const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};

const mapStateToLinkProps = (
	state,
	ownProps
) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	};
};

const mapDispatchToLinkProps = (
	dispatch,
	ownProps
) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	};
};

export const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link);