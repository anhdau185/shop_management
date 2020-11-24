import React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';

const FormattedPrice = ({ value, style }) => {
    return (
        <NumberFormat
            value={value}
            displayType="text"
            suffix=" ₫"
            thousandSeparator={true}
            renderText={value => <Text style={style || null}>{value}</Text>}
        />
    );
};

export default FormattedPrice;
