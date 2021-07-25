# Trivia React web app 

the project can be accessed [HERE](https://myreactappstorage1.z6.web.core.windows.net/).

# Design

The app was designed in a simple hierarchy
 * App.js - holds the frame of the app, it includes the logic of pulling and breaking the json received from the database and toggles between 3 screens the app has (Loading, Displaying question, End of game).
 * QuestionBox.js - holds the logic of the game screen, its responsible of displaying the grid of the game including the category, question count, question, answers, score and next button. the QuestionBox will also toggle between 2 views of before and after the user chooses the answer, which the component receives from the App component.

 # Frameworks
* TailwindCSS - I chose to use the tailwind CSS framework for the styling of the app. it allows me to style each component and block separately without globally defining styles. It is also easy to implement and use :)

 # Deployment
 * For simplicity reasons I chose to load the web app to a Blob Storage. It was either Blob storage or Static web app, the advantages of static web app as I understood are primarily for the ability to define a default page and 404 error page. since it's not relevant for the task and it has only one page the simplicity of Blob storage won.

