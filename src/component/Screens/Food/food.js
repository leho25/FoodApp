import { View , Text,TextInput,Button} from "react-native";
import { useState, React } from "react";
import { collection, addDoc } from "firebase/firestore";
import { FIRESTORE } from "../../firebase/firebaseConfig";

const Food = () => {
    const [food, setFood] = useState('')
    const InsertFood = () =>{
        try {
            const listFood = addDoc(collection(FIRESTORE,"Foods"), {
                food:food,
            })
            console.log("Danh sach duoc ghi voi ID",listFood);
            setFood('')
        }catch(error){
            console.error("Loi: ",error)
        }
    }
    return (
        <View>
            <TextInput placeholder="Nhap ten mon an"
            onChangeText={(food) => setFood(food)}/>

        <Button title="Them mon an" onPress={InsertFood}/>
        </View>
    )
}
export default Food