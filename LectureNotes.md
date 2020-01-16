- Best Practice IS opinion. It changes a lot, it's just a "good idea" for now
- Remember, always optimize for readability (ie, for the next developer)
- We can't use static deployment sites (like netlify, and github pages)
- Get your code to work locally, THEN deploy (don't fall into the trap of getting something deployed as soon as possible)
- git push origin master => origin means "where you pulled from"
- git remote gives you the text origin
- git remote -v => tells you what branch you're on
- What we might want is to have the ability to just push to master and have heroku deploy automatically from there
## Steps
- create the start script
- change the port 
    ```
        const port = process.env.PORT || 4000;
    ```
- NODE_ENV means it's going to production. So we needed to change it to DB_ENV in order to deploy it, because we don't actually have a production environment