import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'User Mgmt',
    // path: '/userlist',
    icon: <BsIcons.BsFilePlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Register',
        path: '/register',
        icon: <FiIcons.FiFile />
      },
      {
        title: 'List of User',
        path: '/userlist',
        icon: <FiIcons.FiFile />
      }
    ]
  },
];