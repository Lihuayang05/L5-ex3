import React from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
  {
    title: 'Water',
    bgColor: '#1E90FF',
    icon: 'water',
    data: [
      { name: 'Squirtle', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7.png' },
      { name: 'Blastoise', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9.png' },
    ],
  },
  {
    title: 'Fire',
    bgColor: '#FF6347',
    icon: 'fire',
    data: [
      { name: 'Charmander', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png' },
      { name: 'Charizard', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png' },
    ],
  },
  {
    title: 'Grass',
    bgColor: '#32CD32',
    icon: 'leaf',
    data: [
      { name: 'Bulbasaur', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1-2x.png' },
      { name: 'Venusaur', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_3-2x.png' },
    ],
  },
  {
    title: 'Electric',
    bgColor: '#FFD700',
    icon: 'bolt',
    data: [
      { name: 'Pikachu', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png' },
      { name: 'Raichu', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png' },
    ],
  },
  {
    title: 'Poison',
    bgColor: '#8A2BE2',
    icon: 'skull',
    data: [
      { name: 'Gengar', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_94.png' },
      { name: 'Kadabra', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_64-2x.png' },
    ],
  },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => alert(`You clicked on ${item.name}`)}>
      <Text style={styles.textStyle}>{item.name}</Text>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
);

const renderSectionHeader = ({ section: { title, bgColor, icon } }) => (
    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
      <Icon name={icon} size={30} color="white" style={styles.headerIcon} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
);

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pokemon TCG</Text>
        </View>

        <TouchableOpacity style={styles.addButtonContainer} onPress={() => alert('Add Pokemon clicked!')}>
          <Text style={styles.addButtonText}>Add Pokemon</Text>
        </TouchableOpacity>

        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item) => item.name}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf3c4',
    padding: 15,
  },
  header: {
    backgroundColor: '#ff3918',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: 'white',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 20,
    backgroundColor: '#333',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 18,
    marginBottom: 12,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    flex: 1,
    marginRight: 10,
    textAlign: 'left',
  },
  cardImage: {
    width: 180,
    height: 280,
    marginLeft: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  addButtonContainer: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: '#ffd600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
    color: '#fff',
  },
});

export default App;
