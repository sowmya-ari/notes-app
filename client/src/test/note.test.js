import React from 'react';
import Note from '../components/note';
import Enzyme,{shallow} from "enzyme"; 
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
let wrapper;
beforeEach(() => {
   wrapper = shallow(<Note/>);
});
describe("testing the allnotes component", ()=> {
    test("testing whether notes component is rendering or not",()=>{
        expect(wrapper.exists()).toBe(true);
    })
})