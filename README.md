# Test task

The goal of the assignment is to develop a simple system for managing tasks, using external authentication.

### Steps to follow for this test:
1. #### Fork this repository
2. #### Create ReactJS application inside this folder
   1. Remember about React app git repo patterns - such as `.gitignore` (A build system based on Github Actions will be very welcome.)
3. #### Create free account on [Auth0](https://auth0.com/)
   1. Remember about Auth0 proper configuration
4. #### Integrate Auth0 login with React Application
5. #### How application should look like:
   1. ##### Create simple listing which shouldn't be protected for the anonymous user
      1. Should be placed under: `/listing` route.
      2. Should have `a` attribute which will be linked to the `/details` page
      3. Endpoint for gathering listing resources: `https://reqres.in/api/users`
   2. ##### Create simple details view which should be protected for the anonymous user
      1. Should be placed under: `/details` route.
      2. It should display user avatar (lazy loading will be welcome)
      3. Endpoint for gathering user resource: `https://reqres.in/api/users/1`
6. #### Git repository layout and patterns
   1. A correctly executed task should have commits in the Conventional Commit Messages format
7. #### What you should do when you finish this task
   1. Create a pull request with your changes to this repository and notify your email about the completed task
