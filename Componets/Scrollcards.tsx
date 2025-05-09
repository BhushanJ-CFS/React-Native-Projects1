import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../Style/scrollcards_styles';
const Scrollcards = ({
  Categories,
}: {
  Categories: {name: string; icon: string; bg: string}[];
}) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.Heading}>Categories You Might Like</Text>
        <ScrollView horizontal={true} style={styles.maincardcontainer}>
          {Categories.map((cate, index) => (
            <View
              key={index}
              style={[styles.cardcontainer, {backgroundColor: cate.bg}]}>
              <Text style={{fontSize: 22}}>{cate.icon}</Text>
              <Text>{cate.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Scrollcards;
