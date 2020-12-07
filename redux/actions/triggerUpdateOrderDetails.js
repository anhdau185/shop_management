import { TRIGGER_UPDATE_ORDER_DETAILS } from "./types";

const triggerUpdateOrderDetails = orderId => ({
    type: TRIGGER_UPDATE_ORDER_DETAILS,
    orderId
});

export default triggerUpdateOrderDetails;
