import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

// Components for scroll/flat card project
import Flatcards from './Flatcards';
import Scrollwith_Img from './Scrollwith_Img';
import Scrollcards from './Scrollcards';

//  Login screen project
import Login from './Login';

// State management practice
import States from './States';

// Product Showcase project (Coreflex Solutions)
import ProductShowcaseApp from './Product';

function App() {
  return (
    <SafeAreaView>
{/* Uncomment to test Login Screen Project */}

      {/* <Login /> */}

{/* Uncomment these 3 components for FlatCards + ScrollCards + ScrollWithImg project */}
      
      {/* <Flatcards
        topics={[
          {name: 'Sports', icon: '🏀', bg: '#9acd32'},
          {name: 'Games', icon: '🎮', bg: '#9370db'},
          {name: 'Drawing', icon: '🎨', bg: '#daa520'},
        ]}
      />
      <Scrollwith_Img />
      <Scrollcards
        Categories={[
          {name: 'Arcade', icon: '🕹️', bg: '#afeeee'},
          {name: 'Action', icon: '🎯', bg: '#dda0dd'},
          {name: 'Strategy', icon: '🧠', bg: '#f0e68c'},
          {name: 'Board Games', icon: '🎲', bg: '#afeeee'},
          {name: ' Sports', icon: '⚽', bg: '#dda0dd'},
        ]}
      /> */}
     

{/* Uncomment to run Coreflex Product Showcase app */}

      {/* <ProductShowcaseApp /> */}

{/* Uncomment to explore useState/state handling in React Native */}

      <States />

    </SafeAreaView>
  );
}
export default App;
