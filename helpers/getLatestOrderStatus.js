const getLatestOrderStatus = orderAudits => {
    const latestStatusObj = orderAudits[orderAudits.length - 1];
    return latestStatusObj.status;
};

export default getLatestOrderStatus;
