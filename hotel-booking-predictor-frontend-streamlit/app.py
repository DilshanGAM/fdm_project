import streamlit as st
import requests

# Define the URL for your Flask API endpoint
API_URL = 'http://localhost:5000/predict'  # Update with your Flask API URL

# Streamlit app title
st.title('Hotel Booking Prediction')

# Create a sidebar for navigation
st.sidebar.title('Navigation')

# Initialize user input dictionary
user_input = {}

# Define variables to store values
hotel = ''
lead_time = 0
arrival_date_month = ''
arrival_date_week_number = 1
arrival_date_day_of_month = 1
stays_in_weekend_nights = 0
stays_in_week_nights = 0

if 'step' not in st.session_state:
    st.session_state.step = 'Hotel Info'

# Define a dictionary to map step names to their corresponding index
step_to_index = {
    'Hotel Info': 0,
    'Person Count': 1,
    'Customer History': 2,
    'Reservation Info': 3
}

# Define a list of step names
step_names = list(step_to_index.keys())

if st.sidebar.button('Next'):
    current_step_index = step_to_index[st.session_state.step]
    if current_step_index < len(step_names) - 1:
        next_step_index = current_step_index + 1
        st.session_state.step = step_names[next_step_index]

if st.sidebar.button('Previous'):
    current_step_index = step_to_index[st.session_state.step]
    if current_step_index > 0:
        previous_step_index = current_step_index - 1
        st.session_state.step = step_names[previous_step_index]

current_step = st.session_state.step

if current_step == 'Hotel Info':
    st.header('Step 1: Hotel Type and Duration Information')
    # Define input fields for hotel type and duration information
    hotel = st.selectbox('Hotel Type', ['City Hotel', 'Resort Hotel'], key='hotel')
    lead_time = st.number_input('Lead Time (days)', value=0, step=1, key='lead_time')
    arrival_date_month = st.selectbox('Arrival Month', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], key='arrival_date_month')
    arrival_date_week_number = st.number_input('Arrival Week Number', value=1, step=1, key='arrival_date_week_number')
    arrival_date_day_of_month = st.number_input('Arrival Day of Month', value=1, step=1, key='arrival_date_day_of_month')
    stays_in_weekend_nights = st.number_input('Stays in Weekend Nights', value=0, step=1, key='stays_in_weekend_nights')
    stays_in_week_nights = st.number_input('Stays in Week Nights', value=0, step=1, key='stays_in_week_nights')
    
    # Store input values in variables
    user_input['hotel'] = hotel
    user_input['lead_time'] = lead_time
    user_input['arrival_date_month'] = arrival_date_month
    user_input['arrival_date_week_number'] = arrival_date_week_number
    user_input['arrival_date_day_of_month'] = arrival_date_day_of_month
    user_input['stays_in_weekend_nights'] = stays_in_weekend_nights
    user_input['stays_in_week_nights'] = stays_in_week_nights

elif current_step == 'Person Count':
    st.header('Step 2: Person Count Information')
    # Define input fields for person count information
    adults = st.number_input('Number of Adults', value=1, step=1, key='adults')
    children = st.number_input('Number of Children', value=0, step=1, key='children')
    babies = st.number_input('Number of Babies', value=0, step=1, key='babies')
    meal = st.selectbox('Meal Type', ['BB', 'HB', 'FB', 'Undefined'], key='meal')
    country = st.text_input('Country', key='country')
    market_segment = st.selectbox('Market Segment', ['Online TA', 'Offline TA/TO', 'Direct', 'Corporate', 'Complementary', 'Groups', 'Undefined'], key='market_segment')
    distribution_channel = st.selectbox('Distribution Channel', ['TA/TO', 'Direct', 'Corporate', 'GDS'], key='distribution_channel')
    
    # Store input values in variables
    user_input['adults'] = adults
    user_input['children'] = children
    user_input['babies'] = babies
    user_input['meal'] = meal
    user_input['country'] = country
    user_input['market_segment'] = market_segment
    user_input['distribution_channel'] = distribution_channel

elif current_step == 'Customer History':
    st.header('Step 3: Customer History and Segment')
    # Define input fields for customer history and segment
    is_repeated_guest = st.checkbox('Is Repeated Guest', key='is_repeated_guest')
    previous_cancellations = st.number_input('Previous Cancellations', value=0, step=1, key='previous_cancellations')
    previous_bookings_not_canceled = st.number_input('Previous Bookings Not Canceled', value=0, step=1, key='previous_bookings_not_canceled')
    
    # Store input values in variables
    user_input['is_repeated_guest'] = is_repeated_guest
    user_input['previous_cancellations'] = previous_cancellations
    user_input['previous_bookings_not_canceled'] = previous_bookings_not_canceled

elif current_step == 'Reservation Info':
    st.header('Step 4: Reservation Information')
    # Define input fields for reservation information
    reserved_room_type = st.selectbox('Reserved Room Type', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'L', 'P'], key='reserved_room_type')
    assigned_room_type = st.selectbox('Assigned Room Type', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L'], key='assigned_room_type')
    booking_changes = st.number_input('Booking Changes', value=0, step=1, key='booking_changes')
    deposit_type = st.selectbox('Deposit Type', ['No Deposit', 'Non Refund', 'Refundable'], key='deposit_type')
    days_in_waiting_list = st.number_input('Days in Waiting List', value=0, step=1, key='days_in_waiting_list')
    customer_type = st.selectbox('Customer Type', ['Transient', 'Contract', 'Transient-Party', 'Group'], key='customer_type')
    adr = st.number_input('ADR (Decimal)', value=0.0, step=0.01, key='adr')
    total_of_special_requests = st.number_input('Total Special Requests', value=0, step=1, key='total_of_special_requests')
    
    # Store input values in variables
    user_input['reserved_room_type'] = reserved_room_type
    user_input['assigned_room_type'] = assigned_room_type
    user_input['booking_changes'] = booking_changes
    user_input['deposit_type'] = deposit_type
    user_input['days_in_waiting_list'] = days_in_waiting_list
    user_input['customer_type'] = customer_type
    user_input['adr'] = adr
    user_input['total_of_special_requests'] = total_of_special_requests

    # Add "Predict" button to make predictions
    if st.button('Predict'):
        # Send a POST request to your Flask API with user input
        response = requests.post(API_URL, json=user_input)

        # Check if the request was successful
        if response.status_code == 200:
            result = response.json()
            prediction = result

            # Display the prediction to the user
            st.success(f'Predicted Outcome: {prediction}')
        else:
            st.error('Error making prediction. Please try again.')
