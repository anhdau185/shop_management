const paymentStatus = {
    UNPAID: {
        stringValue: 'UNPAID',
        title: 'Chưa thanh toán',
        indicatorColor: '#888'
    },
    PAID: {
        stringValue: 'PAID',
        title: 'Đã thanh toán',
        indicatorColor: '#367ff5'
    },
    FAILED: {
        stringValue: 'FAILED',
        title: 'Không thành công',
        indicatorColor: '#db2828'
    },
    REFUNDED: {
        stringValue: 'REFUNDED',
        title: 'Đã hoàn tiền',
        indicatorColor: '#ed5426'
    }
};

export default paymentStatus;
