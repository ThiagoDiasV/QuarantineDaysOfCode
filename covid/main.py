# main.py

# Imports necessários
from flask import Flask, render_template
import requests
from datetime import datetime

# Criando nosso app
app = Flask(__name__)

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
