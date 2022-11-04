import {
  GoDashboard,
  GoMilestone,
  GoProject,
  GoFileDirectory,
  GoSettings,
  GoSignOut,
} from 'react-icons/go';
import { MdPostAdd, MdEvent, MdArticle } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';

export const sideBarMenu = [
  { name: 'Dashboard', icon: GoDashboard, link: '/dashboard' },
  { name: 'Courses', icon: GoFileDirectory, link: '/courses' },
  { name: 'My Learning', icon: GoMilestone, link: '/my-learning' },
  { name: 'Tasks', icon: GoProject, link: '/tasks' },
  { name: 'Posts', icon: MdArticle, link: '/posts' },
  { name: 'Events', icon: MdEvent, link: '/event' },
];

export const sideFooter = [
  { name: 'Account', icon: GoSettings, link: '/accounts' },
  { name: 'Logout', icon: FaSignOutAlt, link: '/logout' },
];
