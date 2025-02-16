from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/letter')
def letter():
    return render_template('letter.html')

@app.route('/next')
def next_page():
    return render_template('next_page.html')

if __name__ == '__main__':
    app.run()