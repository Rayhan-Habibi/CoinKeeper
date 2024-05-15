import { Image, StyleSheet } from 'react-native';
import { View, Text, ScrollView} from 'react-native';
import RecentTransactionComp from '@/components/RecentTransactionComp';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {

  return (
    <View style={{flex: 1, backgroundColor: "#061934"}} >
      <View style={style.balanceBoxStyle}>
         <View style={style.textContainerStyle}>
            <Text style={style.balanceTextStyle}>Balance</Text>
            <Text style={style.dateTextStyle}>24 December 2029</Text>
            <Text style={style.moneyStyle}>$1,234.00</Text>
            <View>
              <Text></Text>
              <Text></Text>
            </View>
         </View>
         <Image source={require("../../assets/images/balance-background-edited.jpg")} style={style.imageContainerStyle}></Image>
      </View>
      <View style={style.transactionSectionStyle}>
        <Text style={style.transactionTextStyle}>Recent Transaction</Text>
        <ScrollView style={style.test}>
          <RecentTransactionComp />
        </ScrollView>
      </View>
      
    </View>
  );
}

const style = StyleSheet.create({
  balanceBoxStyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f6efdf",
    height: "30%",
    width: "85%",
    marginHorizontal: "auto",
    elevation: 10,
    marginVertical: 20,
    borderRadius: 30,
    overflow: "hidden",
  },
  balanceTextStyle:{
    fontWeight: "bold",
    fontSize: 20,
  },
  dateTextStyle:{
    opacity: 0.8,
    fontSize: 15
  },
  moneyStyle:{
    fontSize: 30,
    fontWeight: "800",
    marginVertical: 20,
  },
  imageContainerStyle:{
    width: 200,
    height: 250,
    
  },
  textContainerStyle:{
    padding: 20,
    paddingVertical: 25
  },
  transactionSectionStyle:{
    marginHorizontal: 20,
    marginVertical: 20,
  },
  transactionTextStyle: {
    fontSize: 25,
    color: Colors.light.text,
    fontWeight: "bold",
    marginBottom: 20
  },
  test:{
   
  }
})