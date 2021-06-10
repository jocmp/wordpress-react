import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import Gallery2 from './Gallery2';
import './index.css';
import reportWebVitals from './reportWebVitals';

const COMPONENTS: { [index: string]: any } = {
	Gallery,
	Gallery2,
};


(window as any).Gallery = Gallery;
(window as any).Gallery2 = Gallery2;

const defaultConfig = {
  'NAME_ATTR': 'data-react-component',
  // 'PROPS_ATTR': 'data-react-props',
  render: (component: any, props: any) => React.createElement(component, props),
  strict: true,
};

function mountComponent(node: any) {
  console.log(node)
	const config = Object.assign({}, defaultConfig, {});
	const name = node.dataset['reactComponent'] as string;
	ReactDOM.render(config.render(COMPONENTS[name], {}), node);
}

function mountComponents() {
	const nodes = document.querySelectorAll('[data-react-component]')

	for (let i = 0; i < nodes.length; i++) {
		// console.log(nodes[i])
		mountComponent(nodes[i])
	}
}

mountComponents();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
