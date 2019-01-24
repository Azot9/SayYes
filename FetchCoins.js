// FetchCoins.js

const URI = 'http://sayyes.dx.am/api/profiles';

export default {
    async fetchCoins() {
        try {
                let response = await fetch(URI);
                console.log(response);
                let responseJsonData = await response.json();
                console.log(responseJsonData);
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}