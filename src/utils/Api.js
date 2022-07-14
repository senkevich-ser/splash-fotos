

class Api {
   constructor({ baseUrl, apiKey }) {
      this._baseUrl = baseUrl;
      this._apiKey = apiKey;
   }

   search(query,pageNamber) {
      return fetch(`${this._baseUrl}/search/photos?query=${query}&count=20&per_page=30&page=${pageNamber}`, {
         headers: {
            Authorization: `Client-ID ${this._apiKey}`
         }
      })
         .then((res) => res.ok ? res.json() : Promise.reject('Error!!!'))
   }
}

const api = new Api({ baseUrl: 'https://api.unsplash.com', apiKey: 'ifEMS6U4yERGg0F706qDZsNiNtNM_RPiV7Nov0zGGWo' });
export default api;