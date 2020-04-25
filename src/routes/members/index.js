import { h } from 'preact';
import style from './style';

const Members = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Members</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>你好</div>
					<div>If you are interested in my work and are looking to contact me for a contract please use the following form to contact me.</div>
					<div>&nbsp;</div>
					<div>Cheers 🍻</div>
				</p>
			</div>
		</div>
	);
};

export default Members;
