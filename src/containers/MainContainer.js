import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyContainer from './BodyContainer';
import Category from '../components/categories/Category';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header/>
                <BodyContainer>
                    
                </BodyContainer>
                <Footer/>
            </div>
        )
    }
}

export default MainContainer;
