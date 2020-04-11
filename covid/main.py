# main.py

# Imports necessários
from flask import Flask, render_template
from flask_bootstrap import Bootstrap

# Criando nosso app
app = Flask(__name__)

# Etapa necessária para estilizar nosso app usando o Bootstrap
Bootstrap(app)

# Criando nossa primeira rota
@app.route('/')
def index():
    doenca = "Varíola"
    return render_template('index.html', doenca=doenca)  


# Rodando nosso app
app.run()