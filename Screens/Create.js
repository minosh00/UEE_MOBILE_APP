import axios from 'axios';
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

function Create({route, navigation}) {

    const [text, setText] = useState("");

    //create krna function eka line 26 call krla thiyenne
    const addText = () => {
        axios.post("url eka").then((res) => {
            console.log("add unoooo")
        }).catch((e) => {
            console.log(e)
        })
    }

  return (
    <View>
        <Text>Create</Text>

        {/* Input field ekai submit button ekai */}
        <TextInput onChange={(e) => setText(e.nativeEvent.text)} placeholder='Your Text Here' />
        <Button onPress={() => addText()} title='Create' />

        <Button onPress={() => navigation.navigate("Retrieve")} title = "Retrieve" />
    </View>
  )
}

export default Create