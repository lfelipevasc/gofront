/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-use-before-define */
import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <SignIn />
        <GlobalStyle />
    </>
);

export default App;
