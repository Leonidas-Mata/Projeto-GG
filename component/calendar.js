import React, { useState } from 'react';
import { Text, View } from 'react-native-web';
import DatePicker from 'react-native-modern-datepicker';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View>
    <DatePicker
      onSelectedChange={date => setSelectedDate(date)}
    />
    <Text>
        Data : {selectedDate}
    </Text>
    </View>
  );
};

export default Calendar