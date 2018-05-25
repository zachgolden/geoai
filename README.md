This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the guide for tips to use Create React App [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Quickstart:

Note: You must have npm installed.
It is typically installed alongside node a quick check can be determined by running the following command in terminal: `node -v` (to check for node) and
`npm -v` (to check for npm)

Clone the git repository:
`git clone https://github.com/zachgolden/geoai.git`

In the root directory run:

`npm install`

In the server directory run:

`npm install`

The code from the git repository is set to run locally so first start a mongo instance on the default port 27017.
(This can be done by running the command `mongod` given a instance is not already running)
Once the next start commands are run the db connection will be made automatically.

To start the react site in the root directory run:

`npm start`

To start the backend, in the server directory run:

`npm start`

Now you should be able to navigate in a browser to localhost:3000 where you should see this:

In order to use the Prediction Test Page
(this page just uploads a file to the local file system and displays the uploaded image)
you must also run `node backup.js` while in the server directory.

The offline python program is in the demo directory:

blur_detection_train.py is use for input training image folder and score file to train the SVM model
to run blur_detection_train.py in terminal:
`python blur_detection_train.py -i score.txt -o ModelName`

blur_detection_predict is use for predict single testing image
to run blur_detection_predict.py in terminal:
`python blur_detection_predict.py -i imageName -m ModelName`

GeoAI is use for batch process testing images in given folder, user will set acceptable rate from 0-9(really clear-really blur)
currently we find out score of 4 is the most reasonable acceptable range

user Also need to change the path for output directory in code, sorry.
to run GeoAI in terminal:
`python GeoAI.py -f imageFolder -r 4 -m ModelName`

crop.py is use for crop all images in input folder to multiple 200x200 images
to run crop.py in terminal:
`python crop.py -f FolderName`
`crop.py will save all images into crop.py's current directory, so please put crop.py in a separate folder`

score.py is use for score the image from input folder, and store the score like this format: FolderName\ImageName \t score(0-9)\n
This format will be use in python blur_detection_train.py

to run score.py in terminal:
`pyrhon score.py -i FolderName -o score.txt`
