import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faPython, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

export const languages = [
  {
    name: 'javascript',
    icon: <FontAwesomeIcon size='2x' icon={faJs} />
  },
  {
    name: 'html',
    icon: <FontAwesomeIcon size='2x' icon={faHtml5} />
  },
  {
    name: 'css',
    icon: <FontAwesomeIcon size='2x' icon={faCss3Alt} />
  },
  {
    name: 'python',
    icon: <FontAwesomeIcon size='2x' icon={faPython} />
  },
];