<h1 align="center">
<br>
  <img src="https://66.media.tumblr.com/bbadff36e7476287dca8c4cd0afdb67e/02014eeb4b03fe2c-c2/s250x400/8a36e5374c42ccfab57c0c7001c021faf20d8bb5.jpg" alt="Ecoleta" width="120">
<br>
<br>
Ecoleta
</h1>


<p align="center">An application to match people who need to dispose of waste with places that collect them.</p>
<p align="center">This project was due during the Next Level Week given by Rockeseat (https://rocketseat.com.br/).</p>

[//]: # "Add your gifs/images here:"



<div align="center">
<img  src="https://s7.gifyu.com/images/ezgif.com-video-to-gif62be27928cfd2b59.gif" alt="demo" height="280">
<img src="https://s7.gifyu.com/images/ezgif.com-video-to-gif-1549eb41e78582786.gif" alt="web_demo" height="280">
</div>
<hr />

## Features

[//]: # "Add the features of your project here:"

This app features all the latest tools and practices in web and mobile development!

- ⚛️ **React Js** — A JavaScript library for building user interfaces
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS
- 💹 **Node Js** — A web framework for Node Js
- 📱 **Expo** — open-source platform for making universal native apps
- 💿 **Sqlite** — A relational database management system

## Getting started

1. Clone this repo using `git clone git@github.com:alexguimenti/appEcoleta.git`
2. Move yourself to the appropriate directory: `cd appEcoleta`
3. Run `npm install` on each of those folders: 'mobile', 'server' and 'web'.

### Getting started with the backend server

1. To build the databases move to the directory 'server' and run those commands: `npm run knex:migrate` & `npm run knex:seed`
2. Change the IP adress at `mobile/src/services/api.ts`, `server/src/controllers/ItemsControllers.ts` and `server/src/controllers/PointsControllers.ts` for the IP from your machine.
3. To start the server move to the folder 'server' and run `npm run dev` and keep it running on the background. It should run at `http://localhost:3333/`.

### Getting started with the web app

1. Move yourself to the web app folder: `cd web`
2. Run `npm start` to start the web application. It should run at `http://localhost:3000/`.

### Getting started with the mobile app

1. Move yourself to the mobile app folder: `cd mobile`
2. Run `npm start` to start the web application. The expo tab should open where you can access the mobile app scanning the QR Code using an emulator or your device.
