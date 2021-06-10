# Wordpress React
A demo app showing how to hook TypeScript React components into a Wordpress plugin

## How it works
The plugin includes a main runner that mounts components onto the page based
on their component name. This works a lot like the
[react-rails](https://github.com/reactjs/react-rails#ujs) UJS runner:

```html
<div data-react-component="Gallery" />
```

The runner will look for an object named `window.Gallery` mounted on the JavaScript `window` and
create and mount a React element at the root of the `div`.
