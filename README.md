# INSTAGRAM FAKE ACCOUNT DETECTOR

## Introduction

The Instagram Fake Account Detector is a web application designed to identify and flag potentially fake or suspicious accounts on the Instagram platform. With the increasing prevalence of fake accounts used for various malicious activities such as spamming, phishing, and misinformation spreading, this tool aims to empower users to protect themselves and their communities from such threats.

## Features

- **Account Analysis**: Analyze Instagram accounts based on various parameters and behaviors to determine authenticity.
- **Machine Learning Algorithms**: Utilize advanced machine learning algorithms to detect patterns indicative of fake accounts.
- **User-Friendly Interface**: Simple and easy-to-use interface for users to interact with the application effortlessly.

## Installation

1. **Download or Clone the repository**:

2. **Start Frontend**:
- Open the terminal of your code editor.
- Navigate to the frontend directory by running `cd frontend`.
- Install all dependencies by running `npm i`.
- Start the frontend by running `npm start`.

3. **Start Backend**:
- Open another terminal of your code editor.
- Navigate to the backend directory by running `cd backend`.
- Install all dependencies by running `npm i`.
- Create a `.env` file with the following configurations:
  ```
  MongoDB Atlas or local database link
  PORT number
  JWT_TOKEN_KEY
  ```
- Start the backend by running `node server.js` or `npm start`.


## Technology Stack

### Frontend

- ReactJS
- CSS

#### Dependencies:

- Axios: for API integration
- dotenv : for secure api integration
- react-router-dom : for routing

### Backend

- Node.js
- Express.js
- Mongoose

#### Dependencies:

- JWToken: for user verification
- Bcrypt: for password hashing
- dotenv : to secure Port, Secret_Key and data base connection
- child_process (spawn): to connect ML and backend

### ML

- Pandas
- Numpy
- Matplotlib
- Sckit-Learn
- Math
- Pickle
- tfidfVectorizer
- knn


## Database

- MongoDB



## Short Video Overview

This short video provides an overview of the Instagram fake account detector. It demonstrates key features, user interface, and how to navigate through the system.

You can watch the video [here](https://drive.google.com/file/d/1_E32s-xBMXMQRj8VWwFGqpaewEs8OW4v/view?usp=drive_link).

