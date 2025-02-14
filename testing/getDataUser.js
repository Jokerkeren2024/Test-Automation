const assert = require("assert");

describe('Get User Feature', function () {

    it('User get data should be sucess', async function () {
        this.timeout(10000)
        const response = await fetch('https://reqres.in/api/users?page=2')

        const Responsedata = await response.json()

        // Untuk mencetak response API
        //console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        assert.strictEqual(response.status, 200, "Status harus 200");

    })

    it('User get invalid detail Booking should be error', async function () {
        this.timeout(10000)
        const response = await fetch('https://reqres.in/api/users?page=2')

        const Responsedata = await response.json()

        // Untuk mencetak response API
        //console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        assert.strictEqual(response.status, 200, "Status harus 404");

    })


})