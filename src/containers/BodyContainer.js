import React from 'react';
import Category from '../components/categories/Category';
import MeatCategory from '../components/categories/MeatCategory';
import FruitCategory from '../components/categories/FruitCategory';
import VegetablesCategory from '../components/categories/VegetablesCategory';
import { Route } from "react-router-dom";
import CardContainer from './CardContainer';

class BodyContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Category>
                    <Route path="/about/fruits/" exact component={FruitCategory} />
                    <Route path="/about/vegs/" exact component={VegetablesCategory} />
                    <Route path="/about/meat/" exact component={MeatCategory} />
                </Category>
                <CardContainer/>
            </div>
        )
    }
}

export default BodyContainer;
