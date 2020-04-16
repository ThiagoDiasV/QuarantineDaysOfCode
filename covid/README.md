# Covid-19

Projeto em Flask de criação de um site informativo sobre a pandemia de Covid-19.

## Como rodar

O projeto foi feito em Python usando o microframework Flask. Então é necessário ter o [Python](https://www.python.org/) instalado na máquina.

O projeto foi feito usando a versão 3.8.2 da linguagem.

Com o Python instalado, faça o clone deste repositório ou baixe o zip e dentro da pasta **covid** crie um ambiente virtual:

    $ python -m venv venv

Agora, ative o ambiente virtual:

No Windows:

    /> venv\Scripts\activate

No Linux e Mac:

    $ source /venv/bin/activate

Você verá que agora seu terminal mostra o nome do ambiente virtual antes da linha de comando:

    (venv) $

Próximo passo é instalar as dependências necessárias para rodar o projeto, que estão no arquivo requirements.txt:

    (venv) $ pip install -r requirements.txt

Todas as bibliotecas externas serão instaladas, inclusive o Flask.

Por fim, basta rodar o projeto com o comando abaixo:

    (venv) $ flask run

O site irá abrir no localhost, na porta 5000.
