#!/bin/bash

# Step 1: Open backend server
cd backend
node server.js &

# Step 2: Change directory
cd ..

# Step 3: Run ng serve with automatic yes response
ng serve