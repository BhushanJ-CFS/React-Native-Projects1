import {
  TouchableOpacity,
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from '../Style/scrollwithimg_styles';
type items = {name: string; img: any; ur: string};
type elements = {name: string; img: any};
const items = [
  {
    name: 'Tennis',
    img: require('../Image/tennis.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Tennis',
  },
  {
    name: 'Running',
    img: require('../Image/running.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Running',
  },
  {
    name: 'Cricket',
    img: require('../Image/cricket.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Cricket',
  },
  {
    name: 'Football',
    img: require('../Image/football.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Football',
  },
  {
    name: 'Basketball',
    img: require('../Image/sport.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Basketball',
  },
  {
    name: 'Swimming',
    img: require('../Image/sport.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Swimming_(sport)',
  },
];

const drawingItems = [
  {
    name: 'Sketching',
    img: require('../Image/sketch.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Sketch_(drawing)',
  },
  {
    name: 'Painting',
    img: require('../Image/paint.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Painting',
  },
  {
    name: 'Digital Art',
    img: require('../Image/digital.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Digital_art',
  },
  {
    name: 'Calligraphy',
    img: require('../Image/Calligraphy.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Calligraphy',
  },
  {
    name: 'Graffiti',
    img: require('../Image/Graffiti.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Graffiti',
  },
  {
    name: 'Cartooning',
    img: require('../Image/Cartooning.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Cartoon',
  },
];

const elements = [
  {
    name: 'Board Games',
    img: require('../Image/Borad.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Board_game',
  },
  {
    name: 'Card Games',
    img: require('../Image/cardss.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Card_game',
  },
  {
    name: 'Strategy Games',
    img: require('../Image/strat.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Strategy_game',
  },
  {
    name: 'Action Games',
    img: require('../Image/Action.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Action_game',
  },
  {
    name: 'Arcade Games',
    img: require('../Image/ar.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Arcade_game',
  },
  {
    name: 'Word Games',
    img: require('../Image/world.jpg'),
    ur: 'https://en.wikipedia.org/wiki/Word_game',
  },
];

const Scrollwith_Img = () => {
  return (
    <SafeAreaView>
      <Text style={styles.cardheading}> Sports </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardWrapper}
            onPress={() => Linking.openURL(item.ur)}>
            <Image source={item.img} style={styles.images} />
            <Text style={styles.cardtext}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.cardheading}> Games </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {elements.map((ele, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardWrapper}
            onPress={() => Linking.openURL(ele.ur)}>
            <Image source={ele.img} style={styles.images} />
            <Text style={styles.cardtext}>{ele.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.cardheading}> Drawing </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {drawingItems.map((element, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardWrapper}
            onPress={() => Linking.openURL(element.ur)}>
            <Image source={element.img} style={styles.images} />
            <Text style={styles.cardtext}>{element.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scrollwith_Img;
