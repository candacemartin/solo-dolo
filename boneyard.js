// //app.js:
// /*/*add back if needed (see unit 10):
// //import in Switch and Route
// import { Switch, Route } from 'react-router-dom'*/

// //import in React and descructured React.Component
// import React, { Component } from 'react';
// //import MainContainer for render below
// import MainContainer from './MainContainer';

// //initialize App and render MainContainer
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <MainContainer />
//       </div>
//     );
//   }
// }

// export default App;
//  */

//maincontainer.js:
//import react and com

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import MarketsDisplay from '../components/MarketsDisplay.jsx';
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
// import MarketsContainer from './MarketsContainer.jsx';
// // import from child components...

// const mapStateToProps = (state) => ({
//   // add pertinent state here
//   totalCards: state.markets.totalCards,
//   totalMarkets: state.markets.totalMarkets,
//   marketList: state.markets.marketList,
//   lastMarketId: state.markets.lastMarketId,
//   newLocation: state.markets.newLocation,
// });

// class MainContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className='container'>
//         <div className='outerBox'>
//           <h1 id='header'>MegaMarket Loyalty Cards</h1>
//           <TotalsDisplay
//             totalCards={this.props.totalCards}
//             totalMarkets={this.props.totalMarkets}
//           />
//           <MarketsContainer
//             marketList={this.props.marketList}
//             lastMarketId={this.props.lastMarketId}
//             newLocation={this.props.newLocation}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// // console.log(mapStateToProps())

// export default connect(mapStateToProps, null)(MainContainer);

// //app again:
// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         jarName: '-',
//       };
//       this.update = this.updateName.bind(this);
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(event) {
//       console.log('I was clicked');
//       this.updateName();
//     }

//     updateName() {
//       if (this.state.jarName !== undefined) this.setState({ jarName: 'new jar' });
//       else this.setState({ jarName: 'renamed jar' });
//     }

//     render() {
//       return (
//         <div>
//           <h1>growing something new?</h1>
//           <p>click the button below to add a new jar</p>
//           <MyButton />
//           <ShroomContainer />
//         </div>
//       );
//     }
//   }

//   function MyButton() {
//     return (
//       <button type='button' className='firstButton' onClick={this.handleClick}>
//         add a jar
//       </button>
//     );
//   }

//   function ShroomContainer() {
//     return (
//       <>
//         <h1>what you're growing</h1>
//         <p>
//           hi.
//           <br />
//           here's a list of what you're growing:
//         </p>
//       </>
//     );
//   }

//   // export default function App() {
//   //   return (
//   //     <div>
//   //       <h1>growing something new?</h1>
//   //       <p>click the button below to add a new jar</p>
//   //       <MyButton />
//   //       <ShroomContainer />
//   //     </div>
//   //   );
//   // }

//   export default App;
