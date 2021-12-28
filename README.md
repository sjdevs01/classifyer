# classifyer
Steps to use this: 
1) Download & Install node.js if you dont already have it, then download this repo as a zip file, extract contents to a folder.
2) Next, use `npm i` in the project folder.
3) Open config.js, enter your Email ID & Password in  the respective fields. (No need to change the time table if you're in 10th C/D, if not, then change the time table, if you're not in Class 10th, change the links too).
4) At the start of the day, run start.bat and all your classes will be attended automatically.

In case of error, the app retries once, and then shuts down.

You can schedule the start.bat to run itself everyday using [Task Scheduler](https://www.thewindowsclub.com/how-to-schedule-batch-file-run-automatically-windows-7) (still works for windows 10), or use cron jobs in linux (or whatever you prefer there are like 300000 packages to choose from)

Anyone can customise the app according to their needs, you can change the time too, the format being `HH/MM/SS/MS`
