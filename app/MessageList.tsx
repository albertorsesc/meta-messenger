'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import { client } from '../pusher';
import { Message } from '../typings';
import fetcher from '../utils/fetchMessages';
import MessageComponent from './MessageComponent';

function MessageList() {
	const {
		data: messages,
		error,
		mutate,
	} = useSWR<Message[]>('/api/getMessages', fetcher);

	useEffect(() => {
		const channel = client.subscribe('messages');

		channel.bind('new-message', async (data: Message) => {
			// Check if the message is already in the list
			if (messages?.find((message) => message.id === data.id)) {
				return;
			}

			if (!messages) {
				mutate(fetcher);
			} else {
				mutate(fetcher, {
					optimisticData: [data, ...messages!],
					rollbackOnError: true,
				});
			}
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages, mutate]);

	return (
		<div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
			{messages?.map((message) => (
				<MessageComponent message={message} key={message.id} />
			))}
		</div>
	);
}

export default MessageList;
