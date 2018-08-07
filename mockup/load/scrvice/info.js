const Mock = require('mockjs');

const data = function () {
    return Mock.mock({
        code: 0,
        data: {
            "checkInPwd": "456789",
            "role": "2",
            "name": "myy",
            "seatId": "8002",
            "userId": "user0002"
        }
    })
}
module.exports = data;
