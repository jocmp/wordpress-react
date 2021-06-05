import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import './index.css';
import reportWebVitals from './reportWebVitals';

const COMPONENTS: { [index: string]: any } = {
	Gallery: <Gallery />
};

function renderComponent(element: Element) {
	if (!(element instanceof HTMLElement)) {
		return;
	}
	const name = element.dataset['reactComponent'] as string;
	const component = COMPONENTS[name];
	ReactDOM.render(component, element);
	console.log(element.dataset['reactComponent']);
}

document.querySelectorAll('[data-react-component]').forEach(renderComponent);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
