import React from 'react';
import EnquiryList from '../components/enquiryList';
import {create} from 'react-test-renderer';

describe('EnquiryList Component Snapshot', () => {
    test("EnquiryList",() => {
        let tree = create(<EnquiryList/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
