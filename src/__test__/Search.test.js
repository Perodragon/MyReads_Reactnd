import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Search from '../overLook/Search'

/* Reference : 
	(1) Enzyme Testing.
	(2) 
     Links :
		[ https://enzymejs.github.io/enzyme/docs/installation/index.html ]
		[ https://enzymejs.github.io/enzyme/docs/api/shallow.html ] */
		
configure({ adapter: new Adapter() });

describe('<Search/>', () => {
	it('renders without crashing', () => {
		shallow(<Search/>)
	});
});