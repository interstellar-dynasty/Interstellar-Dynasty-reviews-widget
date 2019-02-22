FROM node:9.6.1-onbuild
RUN npm install nodemon -g
EXPOSE 3031
CMD ["npm", "start"]