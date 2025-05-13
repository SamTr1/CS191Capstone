from flask import Flask, request, jsonify
import boto3
import uuid
import os
import awsgi

# Initialize Flask app
app = Flask(__name__)

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb', region_name='us-west-2')  # Adjust your region
table_name = os.environ.get('DYNAMODB_TABLE', 'YourDynamoDBTableName')
table = dynamodb.Table(table_name)

@app.route('/')
def home():
    return "New"

@app.route('/test')
def dev_test():
    return jsonify(status=200, message='OK')

@app.route('/cs')
def dev_cs():
    return "Hello from /cs"

@app.route('/submit', methods=['POST'])
def submit_data():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Missing JSON body'}), 400

        # Generate a unique ID for the item
        data['id'] = str(uuid.uuid4())

        # Save to DynamoDB
        table.put_item(Item=data)
        return jsonify({'message': 'Data stored successfully', 'id': data['id']}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get/<string:item_id>', methods=['GET'])
def get_data(item_id):
    try:
        response = table.get_item(Key={'id': item_id})
        if 'Item' not in response:
            return jsonify({'error': 'Item not found'}), 404
        return jsonify(response['Item']), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def lambda_handler(event, context):
    print("Received event:", event)
    try:
        return awsgi.response(app, event, context, base64_content_types={"image/png"})
    except Exception as e:
        print("Exception occurred:", e)
        return {
            "statusCode": 500,
            "body": f"Internal server error: {str(e)}"
        }