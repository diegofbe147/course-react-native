import React, { Component } from 'react';
import { FlatList, Text } from 'react-native'

import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'

class SuggestionList extends Component {
  renderEmpty = () => <Empty text='No hay sugerencias :(' />
  render(){
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2',
      }
    ]
    return (
      <Layout
        title = 'Recomendado para ti'
      >
        <FlatList
          data = { list }
          ListEmptyComponent = { this.renderEmpty }
          renderItem = {({ item }) => <Text>{ item.title }</Text>}
        />
      </Layout>
    )
  }
}

export default SuggestionList