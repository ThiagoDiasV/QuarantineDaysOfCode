# main.py

# Imports necessários
from flask import Flask, render_template
from flask_bootstrap import Bootstrap
import requests
from datetime import datetime

# Criando nosso app
app = Flask(__name__)

# Etapa necessária para estilizar nosso app usando o Bootstrap
Bootstrap(app)

# Criando nossa primeira rota
@app.route('/')
def index():
    # Fazendo a requisição para a API
    request = requests.get('https://api.covid19.finspect.me/brcovid19/map')

    # Atribuindo o JSON recebido a uma variável

    # Pegando a data atual
    date = datetime.now().strftime(format="%d/%m/%Y")
    states_data = request.json()
    return render_template('index.html', states=states_data, date=date)  


# Rodando nosso app
app.run()