import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => <><Layout {...props}>{element}</Layout></>;

// while we only have one export in this file
export const foo = () => {};
