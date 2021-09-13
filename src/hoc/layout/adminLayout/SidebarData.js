import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Stage 1',
    icon: <BsIcons.BsFilePlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'RFQ',
        path: '/admin/rfq',
        icon: <FiIcons.FiFile />
      },
      {
        title: 'List of Org',
        path: '/admin/commingsoon',
        icon: <FiIcons.FiFile />
      }
    ]
  },
];