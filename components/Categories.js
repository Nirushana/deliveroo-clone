import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanityClient'

const Categories = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "category"]`)
      .then((data) => setCategory(data))
  }, [])
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 16, paddingTop: 10}}>
      {/* Categories Card */}
      {category?.map((category) => (
        <CategoryCard key={category._id} imgUrl={category.image} title={category.name} />
      ))}
      {/* <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 1'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 2'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 3'/> */}
    </ScrollView>
  )
}

export default Categories