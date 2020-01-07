## Front End 

# Document for enpoints

### Register: POST
`https://text-adv-game.herokuapp.com/api/registration/`
#### Response
```
{
    "username": "",
    "email": "",
    "password1": "",
    "password2": ""
}
```


### Login: POST
`https://text-adv-game.herokuapp.com/api/login/`
#### Response 
##### "email" is not require 
```
{
    "username": "",
    "email": "",
    "password": ""
}
```
### Logout: POST
`https://text-adv-game.herokuapp.com/api/logout/`
#### Response 


### Rooms: GET
`https://text-adv-game.herokuapp.com/api/adv/rooms`
#### Response
```
{"rooms": [{
    "id": 1, 
    "title": "Outside Cave Entrance",
    "description": "North of you, the cave mount beckons", 
    "n_to": 2, 
    "s_to": 0, 
    "e_to": 0,       
    "w_to": 0
   }]
 ```
 
 ### Move: POST
 `https://text-adv-game.herokuapp.com/api/adv/move`
 
 
 ### Initialize: GET
 `https://text-adv-game.herokuapp.com/api/adv/init`
 #### Response
 ```
 {"uuid": "cc56b9e5-4f90-4892-969c-acf164d6f193", 
  "name": "test123", "title": "Outside Cave Entrance", 
  "description": "North of you, the cave mount beckons", 
  "players": []}
  ```
