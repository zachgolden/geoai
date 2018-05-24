This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the guide for tips to use Create React App [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Quickstart:

Note: You must have npm installed.
It is typically installed alongside node a quick check can be determined by running the following command in terminal: 'node -v' (to check for node) and
'npm -v' (to check for npm)

Clone the git repository:
'git clone https://github.com/zachgolden/geoai.git'

In the root directory run:

'npm install'

In the server directory run:

'npm install'

The code from the git repository is set to run locally so first start a mongo instance on the default port 27017.
(This can be done by running the command 'mongod' given a instance is not already running)
Once the next start commands are run the db connection will be made automatically.

To start the react site in the root directory run:

'npm start'

To start the backend, in the server directory run:

'npm start'

Now you should be able to navigate in a browser to localhost:3000 where you should see this:

In order to use the Prediction Test Page
(this page just uploads a file to the local file system and displays the uploaded image)
you must also run 'node backup.js' while in the server directory.
