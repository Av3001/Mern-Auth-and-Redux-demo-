#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.10.0/bin

cd cd Mern-Auth-and-Redux-demo-
 git pull origin master
 cd backend
 pm2 kill
 pm2 start server.js