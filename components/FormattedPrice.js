import React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';

const FormattedPrice = ({ value, style = null }) => {
    return (
        <NumberFormat
            value={value}
            displayType="text"
            suffix=" ₫"
            thousandSeparator={true}
            renderText={value => <Text style={style}>{value}</Text>}
        />
    );
};

export default FormattedPrice;
