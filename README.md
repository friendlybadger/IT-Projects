# IT-Projects
## FlaskBlog
##### About the Poject
The project FlaskBlog is a simple blog and basic social media website.
The website allow suers to make an account to crate Posts other users can see and comment on.
The project is a MVC(Model View Controller) web application made with flask (Python) to createwebapp.
    
The application has the following features
Create user account and signin
Create and Delete posts 
Comment on posts
like posts

### Required software
Python
Terminal(For eample Powershell, command prompt or Linux Terminal)
        
###### Made with:
Python Version 3.9.1
Flask
Flask-SQLAlchemy
Flask-login
    
###### Running FlaskBlog:
cd FlaskBlog
pip install flask
pip install sqlalchemy

python app.py
Open your broswer and go to *"http://127.0.0.1:5000"*

## MVC_CRUD_REST
###### About the Poject
The project MVC_CRUD_REST is a simple Grocery shopping list.
This porject was made to uses MVC(Model View Controller), REST(Representational State Transfer)Api that uses Aungular and Node to make requests to a MySQL database. 

The web application allows the user to Create,Update,Delete items on to the shopping list.

###### Required software
MySQL Workbench
Node.js
Typescript
Terminal(For eample Powershell, command prompt or Linux Terminal)


###### Made with:
Node.js version v14.15.4 
MySQL Workbench version 8.0.23
Typescript Version 4.7.3  

###### Running MVC_CRUD_REST:
Set up MySQL Workbench and run the database schema located "IT-Projects/MVC_CRUD_REST/DatabaseSchema.txt".
    
Change *"MVCtodoApp/backend/config/config.json"* and change the password to your **MySQL password**.
[config.json](MVCtodoApp/backend/config/config.json)
*{
    "host": "localhost",
    "user": "root",
    "database": "groceries",
    "password": "<password>"
}*

In an terminal put the following in:
*cd MVCtodoApp/backend
npm install
npm start
cd ../frontend
npm install
npm start*
Open your broswer and go to ***"http://localhost:4200/"***
