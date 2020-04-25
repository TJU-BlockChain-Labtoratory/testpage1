import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
//网页菜单栏
const Header = () => (
	<div class={style.fixtop}>
		<header class={style.header}>
			<Link href="/"><img src='/assets/logo+white.png' /></Link>
			<nav>
				<Link activeClassName={style.active} href="/blogs">公告</Link>
				<Link activeClassName={style.active} href="/members">成员</Link>
				<Link activeClassName={style.active} href="/contact">联系我们</Link>
			</nav>
		</header>
	</div>
	
);

export default Header;
