from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('feedback.html')

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        number = request.form['number']
        language = request.form['language']
        watch_model = request.form['watch_model']
        features = request.form.getlist('features[]')
        strap_material = request.form['strap_material']
        comfort_level = request.form['comfort_level']
        rating = request.form['rating']
        
        improvement_ideas = request.form['improvement_ideas']
        
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Number: {number}")
        print(f"Purchase Medium: {language}")
        print(f"Watch Model: {watch_model}")
        print(f"Features Liked: {features}")
        print(f"Strap Material: {strap_material}")
        print(f"Comfort Level: {comfort_level}")
        print(f"Overall Rating: {rating}")
        print(f"Improvement Ideas: {improvement_ideas}")
                
        return "Feedback submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)