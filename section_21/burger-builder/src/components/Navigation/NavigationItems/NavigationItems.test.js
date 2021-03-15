import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'
configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {  
    wrapper = shallow(<NavigationItems /> )
    })

  it('should render two <NavigationItem /> elements if not authenticated', () => {
      //Write testing logic
      expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })

  it('should render three <NavigationItem /> elements if authenticated', () => {
    //Write testing logic
    //wrapper = shallow(<NavigationItems isAuth/> )
    wrapper.setProps({isAuth: true});
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  })

it('should have a <NavigationItem> for logout', () => {
  //Write testing logic
  //wrapper = shallow(<NavigationItems isAuth/> )
  wrapper.setProps({isAuth: true});
  expect(wrapper.contains(<NavigationItem route="/logout" >Logout</NavigationItem>)).toEqual(true)
  })
})
