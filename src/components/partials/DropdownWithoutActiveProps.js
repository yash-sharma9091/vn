import React from 'react';
import {Dropdown} from 'reactstrap';
export const DropdownWithoutActiveProps = (props) => {
	const { active, activeKey, activeHref, ...rest } = props
	return <Dropdown {...rest} />
};