'use client';
import { v4 as uuid } from 'uuid';

import { FormEvent, useState } from 'react';
import { Message } from '../typings';
import useSWR from 'swr';
import fetcher from '../utils/fetchMessages';

function ChatInput() {
	const [input, setInput] = useState('');
	const { data, error, mutate } = useSWR('/api/getMessages', fetcher);

	const addMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!input) return;

		const messageToSend = input;
		setInput('');

		const id = uuid();

		const message: Message = {
			id,
			message: messageToSend,
			created_at: Date.now(),
			username: 'Alberto Rosas',
			profilePic:
				'https://scontent.fcxl1-1.fna.fbcdn.net/v/t39.30808-6/240304076_3071484149838390_2104574556241145730_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjJozNlgKvB4OIDFXjfQk7QbFZwZaEdjFBsVnBloR2MYkNtLACoRN2T1KqoEdKapdid6cVa4qlDQ4wQpxkXCwk&_nc_ohc=iESjB6YA-1cAX-ucTlp&_nc_ht=scontent.fcxl1-1.fna&oh=00_AfD_bCFpMsKoR4zR9n_b7kvIcCQ5gM8zoZvNfDFZ9-GHGA&oe=638E213B',
			email: 'alberto.rsesc@protonmail.com',
		};

		const uploadMessageToUpstash = async () => {
			const response = await fetch('/api/addMessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					message,
				}),
			});

			const data = await response.json();

			console.log(data);
		};

		uploadMessageToUpstash();
	};

	return (
		<form
			onSubmit={(e) => addMessage}
			className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
		>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
				placeholder="Enter message here..."
			/>

			<button
				disabled={!input}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
			>
				Send
			</button>
		</form>
	);
}

export default ChatInput;
