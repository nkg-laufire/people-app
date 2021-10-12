/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';

import App from './App';
import * as Name from './components/name';
import * as Age from './components/age';
import * as Gender from './components/gender';

describe('App', () => {
	test('renders with Input component.', () => {
		const context = Symbol('context');

		jest.spyOn(Name, 'default')
			.mockReturnValue(<input role="name"/>);
		jest.spyOn(Age, 'default')
			.mockReturnValue(<input role="age"/>);
		jest.spyOn(Gender, 'default')
			.mockReturnValue(<input role="gender"/>);

		const { getByRole } = render(App(context));

		expect(getByRole('name')).toBeInTheDocument();
		expect(getByRole('age')).toBeInTheDocument();
		expect(getByRole('gender')).toBeInTheDocument();
		expect(getByRole('app')).toBeInTheDocument();
		expect(getByRole('app')).toHaveClass('App');
		expect(Name.default).toHaveBeenCalledWith(context);
		expect(Age.default).toHaveBeenCalledWith(context);
		expect(Gender.default).toHaveBeenCalledWith(context);
	});
});
