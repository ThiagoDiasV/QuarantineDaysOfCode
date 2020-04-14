# config.py
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    TEMPLATES_AUTO_RELOAD = True