import { Message } from "../typings";


const fetcher = async () => {
  const response = await fetch('/api/getMessages');
  const data = await response.json();
  const messages: Message[] = data.messages;

  return messages;
}

export default fetcher;