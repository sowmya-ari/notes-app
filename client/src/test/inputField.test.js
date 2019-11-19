import React from 'react';
import Inputfield from '../components/inputField';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
let wrapper;
beforeEach(() => {
   wrapper = shallow(<Inputfield/>);
});
describe("testing the allnotes component", ()=> {
    test("testing whether inputfield component is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    test("test whether the component state is changing when we use setstate",()=>{
        wrapper.setState({notes:[{
            title:"hii",
            content:"active"
        }]})
        expect(wrapper.state('notes')).toEqual([{
            title:"hii",
            content:"active"
        }]);
    })
})