// define component
let Button = {
  propTypes: {
    kind: {
      type: 'string',
      expects: ['submit', 'button']
    }
  },
  render(component) {
    let {props, state} = component;
    return <button class="Button" type={props.kind}>{props.children}</button>
  },
  afterUpdate(component, prevProps, prevState, updateState) {
    let {props, state} = component;
    if (!state.clicked) {
      updateState({ clicked: true })
    }
  }
};

// use
import {tree,render,renderString, element} from 'deku'
let app = tree(
  <Button kind="submit">Hello World!</Button>
);

console.log(renderString(app));
// render(app, document.body)
