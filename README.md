# hallbookingApi
Api to book hall 
clone the repository
Do npm install and start the server with npm start
Enjoy the api using postman
To Check the api visit the below JSON link 
https://www.postman.com/collections/c25b1e730df59776f881

or Check the following json for all the api
{
"info":{
"_postman_id":"ebbb7ad4-a8e2-4b55-8d59-38a5f1b35e64",
"name":"hall-bookingapi",
"schema":"https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
},
"item":[
{
"name":"list of all rooms with booking status",
"id":"fb25efd4-f869-456e-8f60-3071cd3b258c",
"request":{
"method":"GET",
"header":[
],
"url":"https://hallbookingapi.onrender.com",
"description":"This api will have all the list of rooms with booking status and customer booking details."
},
"response":[
]
},
{
"name":"list all customers",
"id":"77aa82ee-b473-4c0b-833d-e18cb460daa5",
"request":{
"method":"GET",
"header":[
],
"url":"https://hallbookingapi.onrender.com/customer",
"description":"This api will give you all the customers data, who have booked room."
},
"response":[
]
},
{
"name":"create room",
"id":"91de0efe-223e-4bf4-a504-04eb3fd24dd8",
"request":{
"method":"POST",
"header":[
],
"body":{
"mode":"raw",
"raw":" {\r\n \"room_name\": \"Test Room\",\r\n \"seat_available\": \"15\",\r\n \"price\": \"17,000\",\r\n \"amenities\": \"wifi+lunch\"\r\n }",
"options":{
"raw":{
"language":"json"
}
}
},
"url":"https://hallbookingapi.onrender.com/add-room",
"description":"This api will create a new room"
},
"response":[
]
},
{
"name":"book room",
"id":"54af0e31-84e2-47b3-a9c0-fb597d149aa2",
"request":{
"method":"POST",
"header":[
],
"body":{
"mode":"raw",
"raw":"{\r\n \r\n \"name\":\"Decker\",\r\n \"date\":\"12 Sept 2022\",\r\n \"start_time\":\"9:00pm\",\r\n \"end_time\":\"10:00pm\"\r\n}",
"options":{
"raw":{
"language":"json"
}
}
},
"url":{
"raw":"https://hallbookingapi.onrender.com/add/:id",
"protocol":"https",
"host":[
"hallbookingapi",
"onrender",
"com"
],
"path":[
"add",
":id"
],
"variable":[
{
"key":"id",
"value":"6"
}
]
},
"description":"This api will book room based on param id mentioned i.e is the room id in the params to be booked against the customer."
},
"response":[
]
}
]
}
