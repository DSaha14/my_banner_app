// components/NotificationInbox.js
import { useEffect, useState } from 'react';

const NotificationInbox = () => {
  const [inbox, setInbox] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://api.suprsend.com/inbox', {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPRSEND_API_KEY}`,
            'Content-Type': 'application/json',
          }
        });
        const messages = await response.json();
        setInbox(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      {inbox ? (
        inbox.map((message, index) => (
          <div key={index}>
            <h3>{message.title}</h3>
            <p>{message.body}</p>
          </div>
        ))
      ) : (
        <p>Loading messages...</p>
      )}
    </div>
  );
};

export default NotificationInbox;
