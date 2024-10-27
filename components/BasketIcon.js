import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { TouchableOpacity } from 'react-native'

const BasketIcon = () => {

const items = useSelector(selectBasketItems);
const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="bg-[#00CCBB] mx-4 p-3 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-bold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-center text-white font-bold text-lg">View Basket</Text>
        <Text className="text-lg text-white font-bold">£{items.reduce((total, item) => total + item.price, 0)}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon