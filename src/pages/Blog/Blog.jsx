/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h2>1/ Tell us the differences between uncontrolled and controlled components?</h2>
                <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div>
                <h2>2/ How to validate React props using PropTypes?</h2>
                <p>React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API.

                    We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.

                    A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.

                    In this article, we will look at how to validate prop data types with the prop-types library.

                    Installing the prop-t</p>
            </div>
            <div>
                <h2>3/ Tell us the difference between nodejs and express js?</h2>
                <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network applications.</p>
            </div>
            <div>
                <h2>4/ What is a custom hook, and why will you create a custom hook?</h2>
            </div>
        </div>
    );
};

export default Blog;