// App will be a stateful class component
// Will have an initial state set to whatever restaurant id is passed from app
// For now, will render a collectionList for the given restaurant ID
// How do we get that collectionList?
// Send a get request on componentDidMount to server
// get request to url: 'http://localhost:4568/${this.state.id}/collections
// When data is received, should have an array of collection objects in the following format:
/*
    {
        "id": 113,
        "coll_name": "Small Sandwiches in Bernhardberg",
        "user_creator": "Francisca Mayer",
        "coll_followers": 154,
        "last_update": "August 5th 1994",
        "user_followers": 728,
        "user_ratings": 345,
        "user_img_url": "https://loremflickr.com/218/218/food"
    }
*/
// Pass the whole array to props of collectionList
