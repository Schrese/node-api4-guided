## Node Environment Variables (video 1)
- Environment => The computer that your software is going to be running on
    - ex. The developer is going to be running their software on their local computer, so that would be the "development environment", but the company also has servers where the application is deployed, so that users can interact with it, we call this the "production environment"
    - There are several environments that companies might have, and our code must support all of those environments. The ones talked about in this are: 
        *** Example Environments (that we need to consider) ***
        - Development: see above
        - Testing: where QI/QA does their quality tests
        - Staging: Looks a lot like production, but probably has weaker servers. This MUST look EXACTLY like production to make sure that production is going to be solid. So everything that is going into production MUST be in the Staging environment. If everything works in staging, then you pretty much know that everything will work in production (since it's the same environment with the same versions of software (like node, etc))
        - Production: see above
    - Since we have all of these environments (and possibly more depending on the company), we NEED to know WHERE our application is running
    - We want to be able to dynamically change what port our code is running on DYNAMICALLY so that we don't need to change our source code to fit whatever environment it is running on. 
    - ALL platforms have a way to add envoronment variables (the way might be different between each platform, but ALL of them have it!)
    - Hosting providers will give you a way to add environment variables in a SECURE manner for your application to use. 
    - const port = process.env.PORT; (this comes with node) *** This gives us access to read various environment variables ***
        if we only run the code above, it will return that the port is undefined (since we haven't added the port environment variable into our computer), so we will use a ".env" file. You CAN use terminals to add in the environments, but since it's different on different operating systems, we're going to use this file. (Question: what would be the up-side of using the terminal to add the environments rather than the .env file?)
    - Having dynamic port is important for whenever you try to deploy to a hosting platform. This is because the hosting platforms cannot let the applications choose their own development port (this keeps 2 sites from having/wanting the same port). So, the hosting platform actually creates that variable themselves (dynamically) to the .env when you deploy. 

## Steps For Setting Up ###
- Make port dynamic in both the listener and the declaration: 

    ```
        const port = process.env.PORT;

        server.listen(port, () => {
        console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
        }); 

    ```
        
- Install dotenv from npm (This allows us to read the .env file, and apply it to our "port = process.env.PORT" object)
    - Docs: https://www.npmjs.com/package/dotenv
    ```
        npm i dotenv
    ```
    - note: remember that this needs to also be a dependency for production, otherwise production will not be able to read .env 

- Add the config to our root file (in this case index.js is where user enters the application, so we put it at the top here). 
    ```
        require('dotenv').config();
    ```
    - this reads the .env and then calls the 'config' method on it. This looks for a file in the root of our application called ".env"

- Add the ports to the .env file 
    ```
        PORT: 5000
    ```
    note: It is an "unspoken convention" to have environment variables be CAPITALIZED (instead of CamelCased)

- Add .env to .gitignore 
    - We need our app to ignore the .env file, so that other developers can have their own values for the ports and such. 
    - This makes sure that the file is never pushed to our code repository
    note: the gitignore is good for hiding secrets in your code (like api keys, passwords, etc)

## Heroku Deployment
