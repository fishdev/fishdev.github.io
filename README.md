# fishdev website

This is my personal website, with my resume information as well as some personal stuff like public Spotify playlists.

## Development

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See React and CRA documentation for usage instructions. Written in [TypeScript](https://typescriptlang.org) and formatted using [Prettier](https://prettier.io). For styling, I'm a big fan of [Bulma](https://bulma.io/) with the [Flatly](https://jenil.github.io/bulmaswatch/flatly/) theme.

All the source is in the [dev branch](https://github.com/fishdev/fishdev.github.io/tree/dev). The project is organized by domain, with directories for the profile, gallery, etc. Some of the larger ones like `base` and `resume` are divided into subdirectories which follow the same structure.

## Adapting

If you really like the structure of my website, feel free to use it as a basis for your own personal website. All the content is located in the [assets directory](https://github.com/fishdev/fishdev.github.io/tree/dev/src/assets/data). Start by changing the constants for your name and organization. You can also add blocks (projects, experiences, and skills) to the resume section.

You can also change the way data is loaded. I use a trivial [loader](https://github.com/fishdev/fishdev.github.io/blob/dev/src/data/util/loader.ts) since all the content is static, but it might be useful to fetch the data from somewhere else. Just make sure [the structure](https://github.com/fishdev/fishdev.github.io/blob/dev/src/data/interfaces/Data.ts) matches up. Remove the `React.ReactNode` fields if you want to transmit the data over the Internet.

Also, the page-layout resume is generated [automatically](https://fishdev.xyz/resume/printable), which should be printed without margins for optimal appearance.

## Contributing

Please open an issue here on GitHub or email me if you find a bug or would like to suggest an improvement.
