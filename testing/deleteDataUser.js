const assert = require("assert");

describe('Delete User Feature', function () {


    it('Delete data user should be success', async function () {
        this.timeout(10000)
        const url = 'https://reqres.in/api/users/2'
        
        // const requestData = {
        //     name: "Baginda Raja",
        //     job: "Tukang Cukur",      
                
            
        // };

        const response = await fetch(url, {
            method: "DELETE",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify(requestData)
        });

        // const Responsedata = await response.json();

        // Untuk mencetak response API
        // console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        // Untuk assert status code harus sama dengan 200
        assert.strictEqual(response.status, 204, "Status harus 204");

        // Untuk assert firstname sama dengan 'Baginda'
        // assert.strictEqual(Responsedata.name, "Baginda Raja");
    })
})