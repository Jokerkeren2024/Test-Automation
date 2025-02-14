const assert = require("assert");

describe('Create User Feature', function () {


    it('User Create data should be success', async function () {
        this.timeout(10000)
        const url = 'https://reqres.in/api/users'
        const requestData = {
            name: "Baginda Raja",
            job: "Tukang Bakso",      
                
            
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        // Untuk mencetak response API
        // console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        // Untuk assert status code harus sama dengan 200
        assert.strictEqual(response.status, 201, "Status harus 201");

        // Untuk assert firstname sama dengan 'Baginda'
        assert.strictEqual(Responsedata.name, "Baginda Raja");
    })
})