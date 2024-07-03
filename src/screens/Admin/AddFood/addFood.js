import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from 'expo-checkbox';
import {style} from './style';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  collection,
  db,
} from '../../../component/firebase/firebaseConfig';

const AddFood = ({navigation}) => {
  // const [imageBanner, setImageBanner] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [progress, setProgress] = useState(0);
  //lấy ảnh từ thư viện
  const pickImage = async () => {
    let result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (!result.didCancel) {
      setImage(result.assets[0].uri);
    }
  };
  // Function to add a new document
  const addDocument = async () => {
    try {
      const data = {
        name: name,
        price: price,
        description: description,
        discount: discount,
        toggleCheckBox: toggleCheckBox,
        image: image,
      };
      await uploadFile(image);
      const docRef = await addDoc(collection(db, 'products/'), data);
      console.log('Document written with ID: ', docRef.id);
      if (docRef) {
        await clearData();
        navigation.goBack();
      }
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // const pickImageBanner = async () => {
  //   let result = await launchImageLibrary({
  //     mediaType: 'photo',
  //     quality: 1,
  //     selectionLimit: 0,
  //   });
  //   if (!result.didCancel) {
  //     const selectedImages = result.assets.map(asset => ({
  //       uri: asset.uri,
  //     }));
  //     setImageBanner(selectedImages);
  //     uploadFile(selectedImages);
  //   }
  // };
  const clearData = () => {
    setImage('');
    setName('');
    setDescription('');
    setPrice(0);
    setDiscount(0);
    setToggleCheckBox(false);
  };
  //xử lý ảnh thành uri khi thêm
  const uploadFile = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, 'Images/' + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        setProgress(progress.toFixed());
      },
      error => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          console.log('downloadURL', downloadURL);
          await setImage(downloadURL);
        });
      },
    );
  };
  return (
    <View style={style.containerMain}>
      <View style={style.containerHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.iconArrowBack}>
          <Ionicons name={'arrow-back'} size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={style.textHeader}>Thêm món ăn</Text>
      </View>
      <ScrollView>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Tên món ăn</Text>
          <TextInput
            style={style.inputModal}
            placeholder="Tên.."
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Mô tả món ăn</Text>
          <TextInput
            style={[style.inputModal, style.descriptionInput]}
            placeholder="Mô tả.."
            multiline
            numberOfLines={4}
            onChangeText={text => setDescription(text)}
            value={description}
          />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Giá món ăn</Text>
          <TextInput
            style={style.inputModal}
            placeholder="Giá.."
            onChangeText={text => setPrice(text)}
            value={price}
          />
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Khuyến mãi</Text>
          <TextInput
            style={style.inputModal}
            placeholder="Khuyễn mãi.."
            onChangeText={text => setDiscount(text)}
            value={discount}
          />
        </View>

        <View style={style.containerFormInputModal}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.textLabelInputModal}>Link ảnh món ăn</Text>
            <TouchableOpacity
              onPress={pickImage}
              style={{position: 'absolute', right: 10, top: 0}}>
              <Ionicons name={'folder'} size={26} />
            </TouchableOpacity>
          </View>

          {image ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={{uri: image}}
                style={{width: 150, height: 150}}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={style.inputModal}
                placeholder="Link ảnh.."
                onChangeText={text => setImage(text)}
              />
            </View>
          )}
        </View>
        <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Nổi bật</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
        </View>

        {/* <View style={style.containerFormInputModal}>
          <Text style={style.textLabelInputModal}>Link ảnh banner</Text>
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {imageBanner.map((image, index) => (
              <Image
                key={index}
                source={{uri: image.uri}}
                style={{width: 100, height: 100, marginVertical: 10}}
              />
            ))}
          </View>
          <TouchableOpacity
            onPress={pickImageBanner}
            style={{position: 'absolute', right: 10, top: 0}}>
            <Ionicons name={'folder'} size={26} />
          </TouchableOpacity>
        </View> */}
        <View style={style.containerButtonAddFood}>
          <TouchableOpacity style={style.btnAddFood} onPress={addDocument}>
            <Text style={style.textBtnAddFood}>THÊM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddFood;
