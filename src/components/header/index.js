import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
//网页菜单栏
const Header = () => (
	<div class={style.fixtop}>
		<header class={style.header}>
			<img src ="/assets/logo+white.png"/>
			<nav>
				<Link activeClassName={style.active} href="/">首页</Link>
				<Link activeClassName={style.active} href={`/blogs/${0}`}>新闻公告</Link>
				<Link activeClassName={style.active} href="/members">主要成员</Link>
				<Link activeClassName={style.active} href="/achievement">科研成果</Link>
			</nav>
		</header>
	</div>
);

export default Header;
