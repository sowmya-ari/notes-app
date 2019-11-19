import React from 'react';
import Customrouter from '../components/router';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
let wrapper;
beforeEach(() => {
   wrapper = shallow(<Customrouter/>);
});
describe("testing the customrouter component", ()=> {
    test("testing whether customrouter component is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("testing whether a inputfield children component is present or not ", ()=>{
        expect(wrapper.find('BrowserRouter').exists()).toBeTruthy()
    })
    test("it should render 1 links division",()=>{
        expect(wrapper.find('.links')).toHaveLength(1);
    })   
})