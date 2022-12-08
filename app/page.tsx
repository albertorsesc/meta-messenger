import { Message } from '../typings';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

async function HomePage() {
	const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
		(response) => response.json()
	);

	const messages: Message[] = data.messages;

	return (
		<main>
			{/* MessageList */}
			<MessageList initialMessages={messages} />

			{/* ChatInput */}
			<ChatInput />
		</main>
	);
}

export default HomePage;
