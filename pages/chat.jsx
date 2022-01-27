import { Box } from '@skynexui/components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function ChatPage() {
  const router = useRouter();
  const { username } = router.query;
  const [userdata, setUserdata] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
          setUserdata(data);
          setLoading(false);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }, [1000]);
  }, []);

  if (isLoading) {
    return (
      <Box>
        <h1>
          Página do Chat
        </h1>
        <p>Lendo dados...</p>
      </Box>
    );
  }

  return (
    <Box>
      <h1>
        Página do Chat
      </h1>
      <h3>
        {userdata.name}
      </h3>
      <h4>{userdata.login}</h4>
    </Box>
  );
}

export default ChatPage;
