# In your Dockerfile.
FROM node:7.8.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# In your Dockerfile.
COPY . .

RUN npm run build --production

RUN npm install -g serve

CMD serve -s dist

EXPOSE 5000