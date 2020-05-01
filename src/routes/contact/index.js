import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>联系我们</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>敬请期待</div>

				</p>
			</div>
		</div>
	);
};

export default photographs;
