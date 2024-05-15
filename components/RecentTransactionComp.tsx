import { View, Text, ScrollView } from "react-native"
import { StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { Colors } from "@/constants/Colors"

function RecentTransactionComp() {
  return (
    <View style={style.containerStyle}>
        <View style={style.containerHelper}>
            <View style={style.iconStyle}>
                <FontAwesomeIcon size={25} icon={faCartShopping} />
            </View>
            <View style={style.descriptionStyle}>
                <Text style={style.titleStyle}>Groceries</Text>
                <Text style={style.subTitleStyle}>Buy a apple</Text>
            </View>
        </View>
        <View style={style.amountStyle}>
            <Text style={style.amountTextStyle}>-$900</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60
    },
    iconStyle: {
        marginRight: 10,
        backgroundColor: "rrgba(255, 255, 255, 0.6)",
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    descriptionStyle:{
        justifyContent: "center"
    },
    amountStyle:{
        justifyContent: "center",
        marginHorizontal: 10,
        fontWeight: "bold",
    },
    titleStyle: {
        fontSize: 17,
        color: Colors.light.text
    },
    subTitleStyle: {
        color: Colors.light.text,
        opacity: 0.7
    },
    containerHelper:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    amountTextStyle: {
        color: Colors.danger.text,
        fontSize: 18
    }
})

export default RecentTransactionComp
