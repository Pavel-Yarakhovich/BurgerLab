import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/auxiliary';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = ( WrappedComponent, axios ) => {
	return props => {
		const [error, clearError] = useHttpErrorHandler(axios);

			return (
				<Auxiliary>
					<Modal 
						show={error}
						modalClosed={clearError}>
						{error ? error.message : null}
					</Modal>
					<WrappedComponent { ...props } />
				</Auxiliary>
			);
	};
};

export default withErrorHandler;