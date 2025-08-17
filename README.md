# Appy Website React Native Wrapper

This is a React Native app that wraps any website by displaying it in a WebView. 
The idea is that the wrapper can provide a native look and feel to the website, 
without the need to rebuild it. The wrapper can be used to provide native features
like push notifications, deep linking, and a native navigation experience.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. 
This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Features

1. Adds a data attribute to the HTML element `[data-appy-app]` to indicate that 
   the app is running in a wrapper.
2. Adds a style tag to the head of the document and providess a rule that can be
   used to hide elements on the page.

   ```
   html[data-appy-app] [data-appy-hide] {
       display: none;
   }
   ```

   To hide an element, simply add the data attribute `[data-appy-hide]` to the element.

## Links within the website
The WebView component intercepts links within the website and provides a
native navigation experience. By default it pushes the new page onto the
navigation stack but you can provide a data attribute `[data-appy-modal]` to 
the link to open the link in a modal instead.

The links are intercepted by attaching a `click` event listener to the document
and checking if the clicked element is a link:

```javascript
document.addEventListener('click', (event) => {
  event.preventDefault();
}
```

## Logging inside the website

The wrapper overrides the `console.log` function to send logs to the React Native app
via the `postMessage` API. You can use the `console.log` function and it's siblings 
(e.g. warn, error etc) inside the website to log messages that will be displayed 
in the React Native app.

## OnMessage handler
The WebView component has an `onMessage` handler that can be used to
receive messages from the website. The messages are sent using the `postMessage` API.

Messages should be in the following format:

```json
{
  "type": "message_type",
  "data": {
    // data specific to the message type
  }
}
```

For example to navigate to a new page:

```json
{
  "type": "navigation",
  "data": {
    "isModal": false,
    "href": "https://example.com/new-page"
  }
}
```
