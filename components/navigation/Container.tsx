import {Platform, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import tw from 'twrnc'

interface Props {
  children: React.ReactNode
  className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <SafeAreaView
      style={tw`bg-white flex-1 ${Platform.OS === 'android' ? 'mt-1' : 'mt-0'}`}
    >
      <View style={[tw`p-5`, className ? tw`${className}` : null]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Container
