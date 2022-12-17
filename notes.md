/controllers folder - Where we will house all our endpoint routes that interact with the database
/models folder - Where we will write out our tables and columns
server.js - Our entry file, where most server configuration is housed.
.env - Our environment variables; It is recommended that you add it into the .gitignore file.

Dependencies - Where we require all our packages
Configuration/Middleware - Where we configure those dependency packages
express.json() and express.urlencoded(...) - Configuration for body-parser, which parses request bodies that come in
Root - A GET for the root route ('/'), responding with a simple welcome message
Listen - Where we tell our app what port to listen for connections on