import React from 'react';
import { Route, Link } from "react-router-dom";
import Package1 from '../Package1';
import RootsController from '../controllers/RootsController';
import CategoriesController from '../controllers/CategoriesController';
import CardController from '../controllers/CardController';

class AdminContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/admin/roots/">Roots controller</Link>
                    </li>
                    <li>
                    <Link to="/admin/categories/">Categories controller</Link>
                    </li>
                    <li>
                    <Link to="/admin/cards/">Card setup</Link>
                    </li>
                </ul>
                </nav>

                <Route path="/admin/cards/" exact component={CardController} />
                <Route path="/admin/categories/" exact component={CategoriesController} />
                <Route path="/admin/roots/" exact component={RootsController} />
            </div>
        )
    }
}

export default AdminContainer;
