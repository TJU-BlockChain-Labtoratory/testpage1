import { h } from 'preact';
import style from './style';

const Menu = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Menu</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>你好</div>
					<div>This is a menu!</div>
					<div>&nbsp;</div>
					<div>Cheers 🍻</div>
				</p>
			</div>
		</div>
	);
};

export default Menu;
