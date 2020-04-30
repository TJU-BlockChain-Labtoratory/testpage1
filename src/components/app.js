import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Blogs from '../routes/blogs';
import Blog from '../routes/blog';
import Contact from '../routes/contact';
import Members from '../routes/members';
import Others from '../routes/others';
import Menu from '../routes/menu';
import ContactSuccess from '../routes/contact-success';
import NotFoundPage from '../routes/notfound';
/*
App:网页函数所在，网页的一些预设
*/
export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	/*
	handleRoute:跳转处理函数
	*/
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	/*
	设置router
	*/
	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Blogs path="/blogs/"/>
						<Blog path="/blog/:name" />
						<Members path="/members/"/>
						<Contact path="/contact/" />
						<Others path="/others" /> 
						<Menu path="/menu" /> 
						<ContactSuccess path="/contact-success" />
						<NotFoundPage type="404" default />
					</Router>
				</div>
			</Provider>
		);
	}
}
