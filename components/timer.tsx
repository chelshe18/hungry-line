import React from 'react';
import CountDown from 'react-native-countdown-component';

export default function Timer() {
    return (
        <CountDown 
            size={30}
            digitStyle={{ backgroundColor: '#FFF8D6', margin: 0, padding: 0,}}
            showSeparator
            digitTxtStyle={{ color: '#617A55', marginBottom: 8,}}
            timeLabels={{}}
            timeToShow={['M', 'S']}
            separatorStyle={{ color: '#617A55', marginBottom: 16, }}
        />
    )
}