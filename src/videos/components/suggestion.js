import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

function Suggestion(props){
  return(
    <View style={styles.container}>

      <View style={styles.containerLeft}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: props.medium_cover_image
          }}
        />
        <View style={styles.containerGenre}>
          <Text style={styles.textGenre}> {props.genres[0]} </Text>
        </View>
      </View>

      <View style={styles.containerRight}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.stars}>{props.rating} Estrellas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  containerGenre: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: 15,
    backgroundColor: 'black',
    padding: 3,
  },
  containerLeft: {
    marginRight: 30,
    paddingVertical: 15,
  },
  containerRight: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    flex: 1,
  },
  textGenre:{
    color: 'white',
    fontSize: 12,
  },
  thumbnail: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color:  '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    color: 'white',
    borderRadius: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 12,
  },
  stars:{
    color: '#6b6b6b',
    fontSize: 15,
    fontWeight: 'bold',
  },
})

export default Suggestion