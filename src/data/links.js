import { AiOutlineHome } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import Home from '../pages/Home';
import Messages from '../pages/Messages';

export const links = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    icon: <AiOutlineHome />,
    page: <Home />,
  },
  {
    id: 2,
    name: 'Messages',
    url: '/messages',
    icon: <FiMessageCircle />,
    page: <Messages />,
  },
];
