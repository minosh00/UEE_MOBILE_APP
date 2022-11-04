import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const Retrieve = () => {

    const [items, setItems] = useState([]);

    //get eka wda krnne use effect eka athule
    useEffect(() => {
        //meka thamai get function eka
        axios.get("get url eka").then((res) => {
            setItems(res.data);
        }).catch((e) => {
            console.error(e)
        });
    }, []);

    //delete function eka
    const deleteItem = (id) => {
        axios.delete("delete url eka /id danna").then(res => {
            console.log("Delete unoooooooo")
        }).catch(e => {
            console.error(e)
        })
    }

    //update function eka
    const updateItem = (id) => {
        axios.patch("updated url eka /id danna").then(res => {
            console.log("update unoooooooo")
        }).catch(e => {
            console.error(e)
        })
    }

    return (
        <View>
            {/* methana items okkoma eliyt aran thiyenne map eken */}
            {
                items.map((item) => (
                    <View>
                        <Text>{item.name}</Text>

                        {/* methana function 2ta id eka pass krnw item eke */}
                        <Button onPress={() => updateItem(item._id)}>Update</Button>
                        <Button onPress={() => deleteItem(item._id)}>Dalete</Button>
                    </View>
                ))
            }
            <Text>Retrieve</Text>

            <Button onPress={() => updateItem()}>Update</Button>
            <Button onPress={() => deleteItem()}>Dalete</Button>
        </View>
    )
}

export default Retrieve