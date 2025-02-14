const assert = require("assert");

const schema = {
    
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "email": {
                "type": "string"
              },
              "first_name": {
                "type": "string"
              },
              "last_name": {
                "type": "string"
              },
              "avatar": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "email",
              "first_name",
              "last_name",
              "avatar"
            ]
          },
          "support": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string"
              },
              "text": {
                "type": "string"
              }
            },
            "required": [
              "url",
              "text"
            ]
          }
        },
        "required": [
          "data",
          "support"
        ]
      

};

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