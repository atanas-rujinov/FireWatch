from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__)

@app.route('/')
def index():
    with open("static/js/fires.json") as json_file:
        data = str(json.load(json_file))
        print(data)
    return render_template('index.html', data=data)

@app.route('/report', methods=['GET', 'POST'])
def report():
    if request.method == 'POST':
        req = request.form
        with open("static/js/fires.json") as json_file:
            data = json.load(json_file)
            data.append(req)
        with open("static/js/fires.json", 'w') as json_file:
            json.dump(data, json_file)
        return redirect(url_for('index'))


    return render_template('report.html')

if __name__ == '__main__':
    app.run(debug=True)