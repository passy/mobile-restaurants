# coding: utf-8
"""
Simple Flask server to serve all this on heroku.

:author: 2012, Pascal Hartig <phartig@weluse.de>
"""
import flask
from flask import helpers


app = flask.Flask(__name__, static_folder='dist/')


@app.route("/")
@app.route("/home")
@app.route("/menu")
@app.route("/menu/<int:id>")
@app.route("/menu/<int:id>/<int:sub_id>")
@app.route("/directions")
@app.route("/contact")
def index(**kwargs):
    return flask.send_file("dist/index.html")


@app.route("/<path:filename>")
def static(filename):
    return app.send_static_file(flask.request.path[1:])


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
