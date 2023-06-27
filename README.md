# OpenIDE

A NodeJS backend service providing free-to-use API-endpoints for compiling and interpreting source code of different programming languages.

<div align="center">DEMO</div>

![preview](https://cdn.statically.io/gh/thatsameguyokay/images/main/ide.gif)

* **Usage:** The server routes can be used to serve several frontends at once for compiling source code.
* **No time restrictions:** As of now, there is no limit to time and number of requests.
* **Clean UI:** The app has been implemented with a clean and easy to use UI.
* **Modulated code:** The code structure is fully-modulated and based on industry level design patterns.
* **Latency:** Latency for the server depends on average traffic and servers on which is has been hosted.
* **Scalable:** Requests get executed in order of FCFS, and queues before compilation and execution.
* Supported Languages: 
  - C++ ✅
  - Python ✅
  - JavaScript ✅️
  - Java - issues with installation of `javac` on host machines.

<div align="center">
  <img src="https://cdn.statically.io/gh/thatsameguyokay/images/main/openide.png">
</div>

## Installation

Follow the steps to get started. **You can use as little or as much NodeJS as you need**:

* Fork and clone [this](https://github.com/sambhavsaxena/openIDE) repository to make an instant copy of the content.
* Alternatively, you can download the source and set it up with Github Desktop.
* Open the root folder in the code editor of your preference, and run the following commands:

```
 npm install && cd app/ && npm install -> installation
 npm start & (cd app/ && npm start) -> consecutively runs on a single terminal
```

The binaries are present at [operations/binaries](https://github.com/sambhavsaxena/openIDE/blob/main/operations/binaries/).

## to-do

Configure the `server` directory to use local proxy through the application, instead of providing an open-to-all API.
Understanding this [package.json](https://github.com/sambhavsaxena/ikigai/blob/081e3e781e2621d0205d2d743511ecb66e2ffc7d/frontend/package.json#L3) might help with the implementation.

## Documentation

Check out the [Getting Started](https://reactjs.org/docs/getting-started.html) page for a quick overview of the project structure.

You can improve it by sending pull requests to [this repository](https://github.com/sambhavsaxena/openIDE).

## Contributing
The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React based apps.

### Code of Conduct
OpenIDE has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### Contributing Guide
Read the React's [contributing guide](https://reactjs.org/contributing/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React, or overall MERN.

Raise an issue [here](https://github.com/sambhavsaxena/openIDE/issues).

### Good First Issues
To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/sambhavsaxena/openIDE/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started <3.

### License
OpenIDE is [MIT licensed](./LICENSE).
