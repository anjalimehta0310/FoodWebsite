// import { Outlet } from "react-router-dom"

// const About = () => {
//     return(
//         <div>
//             <h1>About us Page</h1>
//             <p>This is content</p>
//             <Outlet/>
//         </div>
        
//     )
// }
// export default About
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };

    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('mounted');
  }

  render() {
    // console.log('rendered');
    return (
      <div className='container-max py-16  text-center min-h-[80vh]'>
        <img
          src='https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg'
          alt=''
          className='w-full max-w-[480px] mx-auto rounded-lg'
        />

        <div className='w-[90%] max-w-[480px] mx-auto'>
          <h1 className='text-3xl my-4'>Foody 🍔</h1>

          <p>
            Foody is a food ordering web application built with React.js ⚛ and
            Swiggy's API.
          </p>

          <p>count1 : {this.state.count}</p>
          <p>count2 : {this.state.count2}</p>
          <button
            className='border my-2 bg-gray-50 p-2 px-4 rounded-md'
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            click me
          </button>
        </div>
      </div>
    );
  }
}

export default About;