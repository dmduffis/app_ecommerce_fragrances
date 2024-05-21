import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './products.style';
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
              color={COLORS.secondary} 
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
