import Pusher from "pusher";
import Client from 'pusher-js';

export const server = new Pusher({
  appId: `${process.env.PUSHER_APP_ID}`,
  key: `${process.env.PUSHER_APP_KEY}`,
  secret: `${process.env.PUSHER_SECRET_KEY}`,
  cluster: `${process.env.PUSHER_APP_CLUSTER}`
});



export const client = new Client(`${process.env.PUSHER_CLIENT_KEY}`, {
  cluster: 'us3',
  forceTLS: true
});