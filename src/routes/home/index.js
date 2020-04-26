import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						<h2>天津大学-好扑科技区块链实验室 介绍</h2>
						<p>
							深耕区块链技术在物联网、供应链、医疗卫生、信息安全、智慧政务、公益慈善等领域的应用探索，坚持产学研发展思路，力求在做好基础理论研究的同时，提升科研成果转化率，切实让区块链造福经济社会，为社会治理能力的提升和新经济的创新发展贡献力量。
						</p>
						<p>
							天津大学-好扑科技区块链实验室，受到了学校各级领导及机构的重视，面向受众将不局限于智能与计算机学部，管理与经济学部、新媒体与传播学院、应用数学中心等各学院及组织未来都可会参与进来，以实现学科区域联动和教研资源共建共享。
						</p>
					</div>
				</div>
			</div>
			<div class={style.bio}>
				
			</div>
		</div>
	);
};

export default Home;

