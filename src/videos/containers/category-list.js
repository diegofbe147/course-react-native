import React, { Component }from 'react'
import { FlatList } from 'react-native'

import Empty from '../components/empty'
import HorizontalSeparator from '../../sections/components/horizontal-separator'
import Category from '../components/category'
import Layout from '../components/category-list-layout'

class CategoryList extends Component {
  keyExtractor = item => item.id.toString(); 
  renderEmpty = () => <Empty text='No hay categorias :(' />
  itemSeparator = () => <HorizontalSeparator />
  renderCategory = ({item}) => {
    return(
      <Category {...item} />
    )
  }

  render(){
    return(
      <Layout
        title='Categorías'
      >
        <FlatList
          horizontal
          keyExtractor = { this.keyExtractor }
          data = { this.props.list }
          ListEmptyComponent = { this.renderEmpty }
          ItemSeparatorComponent = { this.itemSeparator }
          renderItem = { this.renderCategory }
        />
      </Layout>
    )
  }
}

export default CategoryList