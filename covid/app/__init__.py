# __init__.py

# Imports necessários
from flask import Flask
from config import Config

# Criando nosso app
app = Flask(__name__)
app.config.from_object(Config)

from app import routes


