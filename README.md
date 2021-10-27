# Summary

Github Profile application built using React and Typescript.

# Some key points to remember :-

1. public/index.html is the root webpage document
2. src/index.tsx is the entry point for the app and for webpack bundler.
3. This app is setup using create-react-app and typescript.

# How to start?

You will need nvm to lock your node version.
To install nvm(Node Version Manager) - [Refer Here](https://github.com/nvm-sh/nvm)

To lock your node version, follow these steps in your terminal:

1.  `nvm install`
2.  `nvm use`

In the project directory, you can run:

### `npm install`

#### For Development build:

Runs the app in the development mode.

`npm start`

#### For production build

`npm run build`

#### For Testing

Launches the test runner in the interactive watch mode.
`npm test`

#### For Formatting (used prettier)

`npm run format`

#### For Linting

`npm run lint`

### for eject

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Folder Structure

src
├── app
| ├── actions
| │ └── ...
| ├── api
| │ └── ...
| ├── common
| │ ├── components
| │ │ └── User.tsx
| | | └── LoginButton.tsx
| │ ├── containers
| │ | └── LoginContainer.tsx
| | | └── ProfileContainer.tsx
| ├── index.tsx
| ├── reducers
| │ └── ...
| ├── routes.ts
| ├── store.ts
| └── ...

# Credits

-> Collaborators :
Taniket Mehra
Abhishek verma
Rudra Kaniya
Arjun Bhatt
