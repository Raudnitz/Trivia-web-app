# Trivia React web app 

the project can be accessed [HERE](https://myreactappstorage1.z6.web.core.windows.net/).

# Design

The app was designed in a simple hierchy
 * App.js - holds the frame of the app, it includes the logic of pulling and breaking the json recieved from the database and toggles between 3 screens the app has (Loading, Displaying question, End of game).
 * QuestionBox.js - holds the logic of the game screen, its responsible of displaying the grid of the game including the category, question count, question, answers, score and next button. the QuestionBox will also toggle between 2 views of before and after the user chooses the answer, which the component recieves from the App component.

 # Frameworks
* TailwindCSS - I chose to use the tailwind CSS framework for the styling of the app. it allows me to style each component and block separately whichout globally defining styles. It is also easy to implement and use :)

 # Deployment
 * For simplisity reasons i chose to load the web app to a Blob Storage, the advantages of static web app as i understood are primaraly for the ability to define a default page and 404 error page. since it's not relevant for the task and it has only one page the simplisity won.

