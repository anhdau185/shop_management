const OrderStatus = {
    NEW: {
        stringValue: 'NEW',
        title: 'Mới tạo đơn',
        indicatorColor: '#ed5426'
    },
    RECEIVED: {
        stringValue: 'RECEIVED',
        title: 'Mới nhận đơn',
        indicatorColor: '#ed5426'
    },
    CONFIRMED: {
        stringValue: 'CONFIRMED',
        title: 'Đã xác nhận',
        indicatorColor: '#367ff5'
    },
    AVAILABLE: {
        stringValue: 'AVAILABLE',
        title: 'Sẵn sàng giao',
        indicatorColor: '#367ff5'
    },
    COMPLETED: {
        stringValue: 'COMPLETED',
        title: 'Đã lấy',
        indicatorColor: '#4db856'
    },
    CANCELED: {
        stringValue: 'CANCELED',
        title: 'Đã huỷ',
        indicatorColor: '#db2828'
    }
};

export default OrderStatus;
