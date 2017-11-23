import React from 'react';
import Helmet from 'react-helmet';
import {decorateTitle} from '../../lib/Helper';

export const MetaTitle = ({location, message}) => {
	return (
		<Helmet>
            <title>{`${decorateTitle(location.pathname)} | Pencil's Ink`}</title>
            <meta name="description" content="VIRTUAL TEACHING AND LEARNING IN THE CLASSROOM."/>
        </Helmet>
	)
}