# dotnetcorestarter
React & Redux SPA w/ .NET Core WebAPI

### Installation
1. Install Visual Studio 2017 and .NET Core deps (2.0.3 min)
2. clone repo ``
3. install npm deps
4. run via visual studio, database should be created
5. browser should open to React App

### Time API
* GET `/api/Time/ServerTime` will return server time in UTC ISO 8601 format
* GET `/api/Time/IPTime` will return time info based on ip (proxied request to http://worldtimeapi.org/)

### Auth API
* POST `/api/Auth/Login` with `{"UserName":"username", "Password":"password"}` will return JWT
* POST `/api/Auth/Register` with `{"UserName":"username", "Password":"password"}` will create a new user and return JWT

### WIP 
- [X] Auth Backend
- [X] JWT Backend
- [x] TimeTest
- [ ] User React Views (partial, Login returns proper JWT)
- [ ] Migrate from MSSQL to Postgres
- [ ] Beautify it with HTML & CSS :)
