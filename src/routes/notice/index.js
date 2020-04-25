import { h } from 'preact';
import style from './style';

const Notice = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Notice</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>你好</div>
					<div>This is a notice page</div>
					<div>&nbsp;</div>
					<div>Cheers 🍻</div>
				</p>
			</div>
		</div>
	);
};

export default Notice;
