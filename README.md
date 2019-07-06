# Full Stack Wall App

_A web application that displays user posts on a public wall._

### Note

This attempt has been discontinued, and further updates to this repository are unlikely. The project was good practice, and I will hopefully have better results in the future.

## Setup

If you clone this repository for your own use, then you'll need to perform these setup requirements.

The setup is intended for local use.

### Backend

Within the "backend" directory, create a Python virtual environment. This application uses Python 3.6+. Activate the virtual environment and run the following:

`$ pip install -r requirements.txt`

Migrate the databases (make sure you're in the 'wall_project' directory):

```
$ python manage.py makemigrations
$ python manage.py migrate
```

Create a superuser:

`$ python manage.py createsuperuser`

#### Databases

Start the server:

`$ python manage.py runserver`

Navigate to [http://localhost:8000/admin/](http://localhost:8000/admin/) and log in as your superuser. Use the GUI to create as many posts as you would like.

## Run Locally

### Backend

Start the server ('wall_project' directory):

`$ python manage.py runserver`

### Frontend

Make sure you're in the 'frontend' directory and run the following:

`$ npm start`

Now you should be able to navigate to [http://localhost:3000](http://localhost:3000) and see posts on the wall.
