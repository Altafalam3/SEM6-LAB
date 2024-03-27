from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Sample data to store feedback
feedback_data = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/feedback', methods=['POST'])
def submit_feedback():
    if request.method == 'POST':
        feedback = {
            'name': request.form['name'],
            'email': request.form['email'],
            'feedback': request.form['feedback']
        }
        feedback_data.append(feedback)
        return redirect('/thankyou')

@app.route('/thankyou')
def thankyou():
    return render_template('thankyou.html', feedback_data=feedback_data)

if __name__ == '__main__':
    app.run(debug=True)
