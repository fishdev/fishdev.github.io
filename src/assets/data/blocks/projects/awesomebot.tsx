import React from 'react';

import { Block } from '../../../../interfaces';

export const awesomebot: Block = {
  id: 'awesomebot',
  name: 'AwesomeBot',
  range: {
    start: {
      month: 10,
      year: 2015,
    },
    end: {
      month: 1,
      year: 2017,
    },
  },
  github: 'BitQuote/AwesomeBot',
  description: (
    <p>
      Built multi-purpose Node.js bot for managing and entertaining over 10,000 online communities.
    </p>
  ),
  info: (
    <div>
      <p>
        Online chat rooms such as <a href="https://discordapp.com/">Discord</a> are often poorly
        moderated, resulting in spam, abuse, and hateful content. AwesomeBot was a free service for
        Discord chat room administrators to mitigate these issues, as well as provide useful tools
        for organization and entertainment:
      </p>
      <ul>
        <li>
          Language filter to remove degrading content such as racist and homophic slurs, notifying
          moderators about incidents and automatically muting offending users if necessary.
        </li>
        <li>Rewards system to promote healthy behavior online.</li>
        <li>
          Provided a well-documented API for developers to build functionality on top of AwesomeBot.
        </li>
        <li>
          Utilities such as reminders, Wikipedia lookup, and quizzes to make online communication
          more engaging.
        </li>
        <li>Configurable management of chat rooms into channels and user roles.</li>
      </ul>
      <p>
        AwesomeBot was one of the first of its kind for the Discord platform. I developed the
        project using Node.js, Express, MongoDB, and the <a href="https://abal.moe/Eris/">Eris</a>{' '}
        library.
      </p>
    </div>
  ),
  moreAwards: [
    <span>
      <b>10,000+</b> online communities
    </span>,
    <span>
      Nearly <b>1 million</b> users
    </span>,
  ],
  images: [
    {
      original:
        'https://github.com/fishdev/AwesomeBot/blob/master/Web/public/img/demo-activity.gif?raw=true',
      thumbnail:
        'https://github.com/fishdev/AwesomeBot/blob/master/Web/public/img/demo-activity.gif?raw=true',
    },
    {
      original: 'https://i.imgur.com/dQqM6Ve.png',
      thumbnail: 'https://i.imgur.com/dQqM6Ve.png',
      description: 'Configuration options for chat room moderation',
    },
  ],
};
