## Meta Messenger

<img src="https://raw.githubusercontent.com/albertorsesc/meta-messenger/master/public/meta-messenger-demo.png" alt="Meta Messenger prototype" style="width:250px;"/>

### Requirements

- Setup an account on [Upstash](https://upstash.com/)
	- Select Node
	- Copy string within `new Redis('<COPY>')
	- Copy your password and replace the stars in your URL with your password.
	- Add the completed URL in the `.env` file under `REDIS_URL`
- Setup an account on [Pusher](https://pusher.com)
	- Obtain your keys and replace them in the `.env` file.


# Installation

Clone project

`git clone `


Copy `.env.example` to `.env` file

`cp .env.example .env`

Fill variable with their respective values from your accounts.

Install Node dependencies

`npm i`

Run app

`npm run dev`


_Note:_  you can open two different browser tabs to start messaging.
