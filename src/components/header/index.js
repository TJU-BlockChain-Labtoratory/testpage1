import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<div class={style.fixtop}>
		<header class={style.header}>
			<Link href="/"><img src ="/assets/logo+white.png"/></Link>
			<nav>
				<Link activeClassName={style.active} href="/blogs">Blogs</Link>
				<Link activeClassName={style.active} href="/contact">Contact me</Link>
			</nav>
		</header>
	</div>
);

export default Header;
