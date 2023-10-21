from sklearn.preprocessing import MinMaxScaler
import joblib
import pandas as pd
from flask import Flask, request, jsonify
import logging
from flask_cors import CORS

import json
# Load the trained Random Forest model
model = joblib.load('Random Forest.pkl')

app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['POST'])
def predict():
    tt= "hello"
    try:

        # Get the JSON data
        new_request_json = request.json
        #read the data from csv
        data = pd.read_csv("data.csv")
        #drop the target column
        data = data.drop(columns=['is_canceled'])
        #add request json as the last row of the data
        new_request_df = pd.DataFrame([new_request_json])

        data.loc[len(data.index)] = new_request_df.loc[0]
        #deleting the first column
        data = data.drop(columns=['Unnamed: 0'])
        #print the last row of the data
        app.logger.info(data.tail(1))
        data['hotel'].replace({'Resort Hotel':1,'City Hotel':0},inplace=True)
        #preprocessing the data
        df3=pd.get_dummies(data=data, columns=['meal','country','arrival_date_month','market_segment','distribution_channel','reserved_room_type','assigned_room_type','deposit_type','customer_type'])
        
        
        columns_to_scale = ['lead_time','arrival_date_week_number','arrival_date_day_of_month','stays_in_weekend_nights','stays_in_week_nights','adults']
        tt = "status -1"
        scaler = MinMaxScaler()
        tt = "status 0"
        df3[columns_to_scale] = scaler.fit_transform(df3[columns_to_scale])
        app.logger.info(df3.tail(1))
        app.logger.info(df3.shape)  # This should print something like (n_samples, n_features)

        tt = "status 1"
        for i in df3.tail(1):
            app.logger.info(i)
            app.logger.info(df3.tail(1)[i])
        result = model.predict(df3.tail(1))
        app.logger.info(result)
        
        return jsonify({'prediction': int(result[0]) , "tt" : tt})

    except Exception as e:
        print('The Exception message is: ', e)
        print(e)
        return jsonify({'error': str(e) , "tt" : tt})

if __name__ == '__main__':
    app.logger.setLevel(logging.INFO)  # Set the log level to INFO
    app.run(debug=True)
