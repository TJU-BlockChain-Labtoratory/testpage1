import { h } from 'preact';
import style from './style';

const Others = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Others</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>你好</div>
				</p>
			</div>
		</div>
	);
};

export default Others;
