import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import dropdownData from '@/constants/addDropdownData'
import { SelectList } from 'react-native-dropdown-select-list'

function Add() {

  const data = dropdownData
  const [selected, setSelected] = useState("")

  return (
    <View style={style.containerStyle}>
      <SelectList 
        setSelected={(val) => setSelected(val)}
        data={data}
        save='value'
        boxStyles={style.boxStyle}
        inputStyles={style.inputStyle}
        dropdownStyles={style.boxStyle}
        dropdownTextStyles={style.inputStyle}
      />
    </View>
  )
}

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.dark.background,
    flex: 1,
    paddingHorizontal: 20
  },
  boxStyle: {
    borderColor: Colors.dark.text,
    
  },
  inputStyle:{
    color: Colors.dark.text
  }
})

export default Add
