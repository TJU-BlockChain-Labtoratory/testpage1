import { h } from 'preact';
import { Link } from 'preact-router/match';
import style_bottom from './style';
//网页菜单栏
const Bottom = () => (
	<div class={style_bottom.fixbottom}>
		<header class={style_bottom.bottom}>
		    <img src ="/assets/logo+white.png"/>
			<nav>
				<p>联系我们</p>
				<p>Email:contact@hoopox.com</p>
				<p>地址:建国门外大街，朝阳区，北京市</p>
			</nav>
		</header>
	</div>
);

export default Bottom;
