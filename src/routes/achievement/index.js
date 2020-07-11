import { h } from 'preact';
import style from './style';
import Bottom from '../../components/bottom';
const Achievement = (props) => {
	return (
		<div >
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>科研成果</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>敬请期待</div>
				</p>
			</div>
		</div>
		 <Bottom></Bottom>
		</div>
	);
};

export default Achievement;
