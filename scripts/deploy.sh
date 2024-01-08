#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.10.0/bin

 cd Mern-Auth-and-Redux-demo-
 git pull origin main
 cd backend
 node server.js