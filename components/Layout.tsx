import {Provider} from 'react-redux'
import {setupStore} from '../store/store'
import {KeyboardAvoidingView, Platform} from 'react-native'

const store = setupStore()

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -64}
      >
        {children}
      </KeyboardAvoidingView>
    </Provider>
  )
}

export default Layout
