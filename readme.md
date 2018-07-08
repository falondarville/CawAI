## Caw Full-Stack Application

These are the development notes for the full-stack application Caw. This is a friendly user interface for the Watson Personality Insights AI. Basically, this AI takes in a portion of text containing more than 100 words and preferably over 1,200 words. With this, the AI provides some data about the author’s personality traits. Caw allows users to either plug in their text without logging in, or to create an account so that searches and results can be saved for future reference.

Note that this application was deployed on Heroku, a free hosting platform. If the page does not initially load, this is because the "dynos" are asleep. Please wait a few minutes, and you will be able to access the app. 

[Use the Application Here](#)

[Comprehensive Build Notes on falondarville.com](#)

[Presentation Slides](https://slides.com/falondarville/deck-1/live#/)

[Portfolio](https://falondarville.github.io/Portfolio/)

## Technologies Used

This project was built using React.js, JavaScript, Bootstrap 4, HTML and CSS, React Router for directing the proper components to their URLs, Express for the server, MySQL for the database, Sequelize to create the database models and ORM structure, and axios for front-end requests to the back-end.

I used three packages in this application that I have not used previously:

1. email-regex for checking that a field contains input matching the format of a standard email address
2. personality-sunburst-chart handles the graphical representation of the Watson Personality Insights data
3. sweet-alert is an easy way to add a beautifully styled alert. I used this to notify users that they have successfully created an account and prompt them to sign in

As for organizing the project, I used GitHub’s built-in Projects tab, which allows you to create a project tied to a specific repository. I created several columns including: To Do, In Progress, and Completed. I also created a daily diary of my progress, a copy of which appears below. On top of that, I keep written lists and notes in a notebook. I committed to GitHub often and used commit names that were logical, descriptive, and concise.

## Challenges and Learning Summary

This project started out at a React Native application. However, given that the MVP was due within several days of me beginning, I chose to change course and build a React application instead. The reason being that I had a difficult time making progress on the original plan for the application, specifically the Twitter log in. Please refer to the proposal to see how much the application was divergent from the end result.

Building USUME prior to this application gave me a strong foundation for this project. There were many similar pieces: the passport configuration and usage, the overall structure of relation between the Express server and the React front-end, and the sign up and login logic.

The Watson Personality Insights AI was easy to work with and well documented. I knew that I wanted to visualize the data for the users, and looked into chart.js and canvas do accomplish this. However, I did not end up having to create my own visualization. I used a package that took the data from the API response and populated a sunburst chart. This package saved me a lot of time and trouble, and really emphasizes the community aspect of coding. Without the effort that those developers went through to create that package, I would have had a lot more work to do.
