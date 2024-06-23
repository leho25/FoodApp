import {React, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import style from './style';
import RevenueItem from './revenueItem';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';

const Revenue = () => {
  const [date, setDate] = useState(new Date());
  const [todate, setToDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showPicker1, setShowPicker1] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      console.log('date', currentDate);
      setDate(currentDate);
      setShowPicker(false);
    }
  };
  const handleToDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || todate;
      console.log('toDate', currentDate);
      setToDate(currentDate);
      setShowPicker1(false);
    }
  };
  const [revenues, setRevenue] = useState([
    {
      id: '2589631472',
      date: '15/08/2024',
      total: '235 000 VNĐ',
    },
    {
      id: '258559631472',
      date: '11/08/2024',
      total: '855 000 VNĐ',
    },
    {
      id: '2589366631472',
      date: '12/08/2024',
      total: '1 752 000 VNĐ',
    },
    {
      id: '65511550155',
      date: '16/12/2024',
      total: '354 000 VNĐ',
    },
    {
      id: '9568225471554',
      date: '05/04/2024',
      total: '534 000 VNĐ',
    },
    {
      id: '659846556651',
      date: '29/11/2024',
      total: '415 000 VNĐ',
    },
  ]);
  return (
    <View style={style.main}>
      <View style={style.viewDate}>
        <View style={style.viewSince}>
          <Text>Từ ngày:</Text>
          <TextInput
            onPress={() => {
              setShowPicker(true);
            }}
            onChangeText={text => {
              setDate(text);
            }}
            value={date.toLocaleDateString()}
            style={style.input}
          />
          {showPicker && (
            <DateTimePickerAndroid
              mode={'date'}
              value={date || new Date()}
              onChange={handleDateChange}
            />
          )}
        </View>
        <View style={style.viewToDate}>
          <Text>Đến ngày:</Text>
          <TextInput
            onPress={() => {
              setShowPicker1(true);
            }}
            onChangeText={text => {
              setToDate(text);
            }}
            value={todate.toLocaleDateString()}
            style={style.input}
          />
          {showPicker1 && (
            <DateTimePickerAndroid
              mode={'date'}
              value={todate || new Date()}
              onChange={handleToDateChange}
            />
          )}
        </View>
      </View>
      <View style={style.viewItem}>
        <FlatList
          data={revenues}
          renderItem={({item}) => <RevenueItem revenue={item} key={item.id} />}
          keyExtractor={eachKey => eachKey.id}
        />
      </View>
      <View style={style.viewTotalMain}>
        <View style={style.viewTotal}>
          <Text style={style.titleTotal}>Tổng doanh thu: </Text>
          <Text style={style.textTotal}> 1542 00 VNĐ</Text>
        </View>
      </View>
    </View>
  );
};
export default Revenue;
