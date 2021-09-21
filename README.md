# Anime Archive

- [Motivation](#contributors)
- [Build Status](#build-status)
- [Contributors](#contributors)
- [Project Overview](#project-overview)
- [Build and Installation](#build-and-installation)
- [API References](#api-reference)

## Motivation
To create is a web platform where you can quickly learn about top anime and manga, and search for new titles to watch or read.
## Build status
[![Netlify Status](https://api.netlify.com/api/v1/badges/2e34f940-debc-4444-a918-5266486e0cb1/deploy-status)](https://app.netlify.com/sites/friendly-lamarr-ed5b43/deploys)
## Contributors
[Josue Rodriguez](https://github.com/maybejosue) | [Erik Rodriguez](https://github.com/ErikRodriguez-webdev)
## Project Overview

[UX Design files](https://www.figma.com/file/4OuESPyiAbWmLT7Tu1iHXt/Web-browser-with-references?node-id=1021%3A4)

[Tasks / Releases](https://trello.com/b/QwJdhW7E/anime-archive)

Anime Archive is a single page application built with React and styled using CSS and the Material-ui framework. Our primary source of content for anime and manga entries come from the [AniList GraphQL API](https://anilist.gitbook.io/anilist-apiv2-docs/). Anime Archive uses the Apollo-Client library to conduct GraphQL queries and store data in local cache for state management purposes.

### Key Features

- 


### Techstack

- React.js
- Material-ui
- Apollo-Client

## Build and Installation

<table>
  <thread>
    <td>
      <b> npm [command] </b>
    </td>
    <td>
      <b> Scripts </b>
    </td>
    </thread>
  <tr>
    <td>
      <b> start </b>
    </td>
    <td>
      <b> Runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console. </b>
    </td>
  </tr>
   <tr>
    <td>
      <b> test </b>
    </td>
    <td>
      <b> Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit. </b>
    </td>
  </tr>
   <tr>
    <td>
      <b> build </b>
    </td>
    <td>
      <b> Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed. </b>
    </td>
  </tr>
  </table>
  
  This application uses Create-React-App and runs all build utils through react-scripts

## API Reference
- [AniList GraphQL API](https://anilist.gitbook.io/anilist-apiv2-docs/)


## License
MIT © Anime Archive
