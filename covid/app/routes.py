# routes.py
from app import app  # aqui precisamos importar o app criado no __init__.py
from flask import render_template
import requests
from datetime import datetime

# Criando nossa primeira rota
@app.route('/')
def index():
    # Fazendo a requisição para a API
    request = requests.get('https://api.covid19.finspect.me/brcovid19/map')

    # Atribuindo o JSON recebido a uma variável
    states_data = request.json()

    # Pegando a data atual
    date = datetime.now().strftime(format="%d/%m/%Y")

    return render_template('index.html', states=states_data, date=date)  