import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../Style/FlatcardStyle';
const Flatcards = ({
  topics,
}: {
  topics: {name: string; icon: string; bg: string}[];
}) => {
  return (
    <SafeAreaView>
      <View style={styles.uppercontainer}>
        <View style={styles.profile}>
          <Text style={styles.textp}>B</Text>
        </View>
        {/* <Text>Profile</Text> */}
        <Text style={styles.mytext}>Choose topics</Text>
        <Text style={styles.mytext}>that interest you most</Text>
        <Text style={styles.subtext}>
          Explore your passion in sports, art & games
        </Text>
      </View>

      <View style={styles.maincardcontainer}>
        {topics.map((topic, index: number) => (
          <View
            key={index}
            style={[styles.cardcontainer, {backgroundColor: topic.bg}]}>
            <Text style={{fontSize: 24}}>{topic.icon}</Text>
            <Text>{topic.name}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Flatcards;
