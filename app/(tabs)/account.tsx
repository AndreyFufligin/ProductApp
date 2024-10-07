import {View, Text, Image} from 'react-native'
import tw from 'twrnc'
import Container from '@/components/navigation/Container'

export default function Account() {
  return (
    <Container>
      <View
        style={tw`flex-row items-center bg-slate-100 p-4 rounded-lg shadow-md`}
      >
        <Image
          source={require('@/icons/account.png')}
          style={tw`w-24 h-10`}
          resizeMode="contain"
        />
        <Text style={tw`text-lg font-bold ml-4`}>Мой аккаунт</Text>
      </View>
    </Container>
  )
}
