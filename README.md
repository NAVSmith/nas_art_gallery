# Art Gallery App
In this project I will create an art gallery app.

There is an API that provides me with all art pieces to show in the gallery:

https://example-apis.vercel.app/api/art
Each item given by the API will include an URL to the image of the art piece. I will use the next/image component to display the image. I won't forget to add the domain example-apis.vercel.app to my Next.js config file. I can refer to the handout of the Session Next.js Basics and Routing for help. I'll always restart the dev server after making a config change.

Besides the art pieces themselves, my gallery app needs to handle data that changes on user interaction. I am required to establish a state to store additional information that is linked to the art pieces given by the API. I'll refer to the handout of the session React Data Fetching for guidance.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

> 💡 Please note that Next.js support on CodeSandbox is not great.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
