from flask import Flask, request, jsonify
import math

app = Flask(__name__)

def calculate_compounding_rate(a, b):
    return abs(2 ** (1 / (a - b)) - 1)

def display_payout_chart(true_over_under, user_over_under, initial_bet):
    a = true_over_under + 5
    b = user_over_under
    r = calculate_compounding_rate(a, b)

    payout_chart = []
    payout_above = initial_bet * (1 + r)
    increment = payout_above - initial_bet

    for i in range(int(user_over_under), 101):
        if i < user_over_under:
            payout = initial_bet - increment * (user_over_under - i)
        elif i == user_over_under:
            payout = initial_bet
        else:
            payout = initial_bet * (1 + r) ** (i - user_over_under)
        
        payout_chart.append({"points": i, "payout": payout})

    return payout_chart

@app.route('/api/calculate', methods=['POST'])
def calculate():
    data = request.json
    true_over_under = data.get('true_over_under')
    user_over_under = data.get('user_over_under')
    initial_bet = data.get('initial_bet')
    
    if true_over_under is None or user_over_under is None or initial_bet is None:
        return jsonify({"error": "Invalid input"}), 400

    payout_chart = display_payout_chart(true_over_under, user_over_under, initial_bet)
    return jsonify({"payout_chart": payout_chart})

if __name__ == '__main__':
    app.run(debug=True)
