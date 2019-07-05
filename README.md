# Full Stack Wall App

_A web application that displays user posts on a public wall._

## Setup

If you clone this repository for your own use, then you'll need to perform these setup requirements.

### Backend

Within the "backend" directory, create a Python virtual environment. This application uses Python 3.6+. Activate the virtual environment and run the following:

`$ pip install -r requirements.txt`

Migrate the databases:

```
$ python manage.py makemigrations
$ python manage.py migrate
```

Create a superuser:

`$ python manage.py createsuperuser`
