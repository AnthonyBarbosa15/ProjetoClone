import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Entypo, Ionicons, EvilIcons, FontAwesome, Foundation, MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoCompleta}>
        <View style={styles.logo}>
          <Entypo name="youtube" size={30} color="red" />
          <Text style={{ fontSize: 19, }}>Youtube</Text>
        </View>
        <View style={styles.icons}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <EvilIcons name="search" size={31} color="black" />
          <FontAwesome name="user-circle-o" size={24} color="black" />
        </View>
      </View>
      <ScrollView>
        <View style={styles.layoutvid}>
          <View>
            <Image style={styles.fotinho} source={require('./assets/image/ratinholightyear.jpg')} />
          </View>
          <View style={styles.descricao}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            <Text style={{fontSize: 14}}>  As maiores aventuras de Ratinho lightyear</Text>
          </View>
          <View>
            <Text style={{fontSize: 12}}>               RatinhoLightyear ► 1 mi vizualizações - há 4 horas</Text>
          </View>
        </View>

        <View style={styles.layoutvid}>
          <View>
            <Image style={styles.fotinho} source={require('./assets/image/ratinholightyear.jpg')} />
          </View>
          <View style={styles.descricao}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            <Text style={{fontSize: 14}}>  As maiores aventuras de Ratinho lightyear</Text>
          </View>
          <View>
            <Text style={{fontSize: 12}}>               RatinhoLightyear ► 1 mi vizualizações - há 4 horas</Text>
          </View>
        </View>

        <View style={styles.layoutvid}>
          <View>
            <Image style={styles.fotinho} source={require('./assets/image/ratinholightyear.jpg')} />
          </View>
          <View style={styles.descricao}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            <Text style={{fontSize: 14}}>  As maiores aventuras de Ratinho lightyear</Text>
          </View>
          <View>
            <Text style={{fontSize: 12}}>               RatinhoLightyear ► 1 mi vizualizações - há 4 horas</Text>
          </View>
        </View>
      </ScrollView>


      <View style={styles.footer}>
        <View style={styles.icons2}>
          <Foundation name="home" size={30} color="black" />
          <MaterialCommunityIcons name="youtube-subscription" size={27} color="black" />
          <AntDesign name="pluscircleo" size={28} color="black" />
          <MaterialIcons name="youtube-searched-for" size={30} color="black" />
          <MaterialIcons name="video-library" size={26} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoCompleta: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  logo: {
    marginLeft: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '33%'

  },
  youtube: {

  },
  icons: {
    marginTop: '1%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '43%'
  },
  footer: {
    width: '95%',
    backgroundColor: 'white',
    height: '7%',
  },
  icons2: {
    marginLeft: '4%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  fotinho: {
    height: 155
  },
  descricao: {
    marginLeft: 10,
    marginTop: '4%',
    flexDirection: 'row'
  },
  layoutvid: {
    marginTop: '5%'
  }


});
