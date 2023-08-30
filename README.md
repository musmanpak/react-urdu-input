# ReactUrduInput - Urdu Text Input Component for React

ReactUrduInput is a React package that provides a convenient and user-friendly way to input Urdu text within your React applications. This package is inspired by the [JavaScript-UrduTextBox](https://github.com/naseem1amjad/JavaScript-UrduTextBox) project, which offers a similar solution in Vanilla JavaScript. ReactUrduInput encapsulates a customizable text input component tailored for the Urdu language, allowing users to seamlessly type in Urdu characters while benefiting from React's component-based architecture.

## Features

- Effortlessly integrate Urdu text input into your React applications.
- Simplified setup: Just install the package and include the component.
- Customizable appearance and behavior to align with your application's design.
- Seamlessly handle RTL (Right-to-Left) text direction for Urdu script.
- Support for handling events and retrieving input values.

## Installation

You can easily install ReactUrduInput using npm or yarn:

```bash
npm install react-urdu-input
```

or

```bash
yarn add react-urdu-input
```

## Usage

1. Import the `ReactUrduInput` component:

```javascript
import ReactUrduInput from 'react-urdu-input';
```

2. Incorporate the `ReactUrduInput` component within your React application's render method:

```javascript
import React, { Component } from 'react';
import ReactUrduInput from 'react-urdu-input';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Urdu Text Input Example</h1>
        <ReactUrduInput />
      </div>
    );
  }
}

export default App;
```

3. Customize the component as needed by providing props:

```javascript
<ReactUrduInput
  placeholder="Type in Urdu"
  onChange={handleInputChange}
  value={inputValue}
  // Add more customization props here
/>
```

## Props

- `placeholder` (string): A placeholder text to display in the input field.
- `onChange` (function): A callback function triggered when the input value changes.
- `value` (string): The current value of the input field.
- Add more props here based on your customization needs.

## Contributing

We welcome contributions to enhance the ReactUrduInput package. To contribute:

1. Fork the repository at [https://github.com/musmanpak/react-urdu-input](https://github.com/musmanpak/react-urdu-input).
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and ensure tests (if applicable) pass.
5. Commit your changes and push them to your fork.
6. Submit a pull request to the original repository, detailing your changes and improvements.

## License

ReactUrduInput is released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

This project is inspired by the [JavaScript-UrduTextBox](https://github.com/naseem1amjad/JavaScript-UrduTextBox) project, which provides a similar solution in Vanilla JavaScript.

---

Feel free to reach out to us with any questions or issues at [musman.pak0@gmail.com](mailto:musman.pak0@gmail.com). We appreciate your interest in ReactUrduInput and welcome further improvements and collaborations!
