from environs import Env

env = Env()
env.read_env()

DJANGO_SECRET_KEY = env.str("SECRET_KEY") # get secret key for django app