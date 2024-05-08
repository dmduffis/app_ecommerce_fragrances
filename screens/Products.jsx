import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './products.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { ProductColumn } from '../components';

export default function Products ({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.titleRow}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.primary} 
            />
        </TouchableOpacity>

        <Text style={styles.titleTxt}>Products</Text>
       </View>
       <View>
            <ProductColumn />
       </View>
      
    </SafeAreaView>
  )
}
