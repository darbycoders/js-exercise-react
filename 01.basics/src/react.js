const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function useState(initValue) {
  const position = currentComponent;
  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  return [
    hooks[position],
    (nextValue) => {
      hooks[position] = nextValue
    }
  ]
}

function renderElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  if (node === undefined) return;

  const $el = document.createElement(node.type);

  node.children.map(renderElement).forEach((node) => {
    $el.appendChild(node);
  });

  return $el;
}

export const render = (() => {
  let prevVdom = null;

  return (nextVdom, container) => {
    if(prevVdom === null) prevVdom = nextVdom;

    // diff

    container.appendChild(renderElement(nextVdom));
  }
})();

export function createElement(type, props, ...children) {
  if (typeof type === "function") {
    if (type.prototype instanceof Component) {
      const comp = new type({ ...props, children });
      return comp.render.call(comp);
    } else {
      currentComponent++;
      return type.apply(null, [props, ...children]);
    }
    
  }
  return { type, props, children };
}