import React from 'react';

export const awesomebot = {
  id: 'awesomebot',
  name: 'AwesomeBot',
  tagline: 'The best Discord bot!',
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
      Single-handedly built multi-purpose Node.js bot for moderating over 10,000 online communities
      to mitigate bullying and hate speech.
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
        AwesomeBot was one of the first of its kind for the Discord platform. I single-handedly
        developed the project using Node.js, Express, MongoDB, and the{' '}
        <a href="https://abal.moe/Eris/">Eris</a> library.
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
  resume: {
    ord: 3,
    name: 'AwesomeBot',
    description: (
      <span>
        Built multi-purpose <i>Node.js</i> bot for managing over <u>10,000 online communities</u>.
      </span>
    ),
  },
};
