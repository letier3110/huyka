import React from 'react';
import { Link } from "react-router-dom";

class Category extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/about/vegs/">Vegetables</Link>
                        </li>
                        <li>
                        <Link to="/about/fruits/">Fruits</Link>
                        </li>
                        <li>
                        <Link to="/about/meat/">Meat</Link>
                        </li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default Category;
