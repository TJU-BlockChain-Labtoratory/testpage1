import { h } from 'preact';
import style from './style';
import Bottom from '../../components/bottom';

const Members = (props) => {
	return (
		<div>
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>主要研究及管理人员</h1>
			<div class={style.formWrapper}>
				<div class={style.pageBody}>
					<div class={style.block}>
						<div class={style.imageContainer}>
							<img src="/assets/wjr.png"  />
						</div>
						<div class={style.introduction}>
							<h2>王建荣</h2>
							<font>
								&emsp;&emsp;天津大学智能与计算学部副主任、副教授，硕士生导师，IT学科创新创业训练基地副主任，研究方向包括多模态语音识别、
								人机交互、高性能区块链技术、物联网与智能感知技术等。ACM会员，IEEE会员和中国计算机学会CCF会员、教育专委员会委员，多年来一
								直担任天津大学机器人代表队、智能车参赛队伍指导教师获得多项国家级和地区级奖励。现已获得授权国家发明专利9项，计算机软件著作权12项。
							</font>
						</div>
					</div>
					<div class={style.block}>
						<div class={style.imageContainer}>
							<img src="/assets/mhb.jpg"  />
						</div>
						<div class={style.introduction}>
							<h2>马昊伯</h2>
							<font>
								&emsp;&emsp;天津大学2012届校友、 好扑科技创始人兼CEO，区块链行业知名技术专家；中国计算机学会区块链专业委员会首批委员，中国电子协
								会区块链专家委员会委员；发表了《基于区块链的数字化指挥控制系统信息传输与追溯模式研究》、《基于区块链DPoS共识的分布式指挥控制系统协同研究》、
								《区块链通证在甲板保障指控信息系统应用研究》等学术论文，并获得了《中国造船工程学会》2018年优秀学术论文等奖项。4项区块链发明专利已通
								过中华人民共和国国家知识产权局初步审查，进入公示及实质审查阶段。曾被人民网创投评为“2018年度区块链风云CEO”。
							</font>
						</div>
					</div>
				</div>
			</div>
		</div>
		  <Bottom></Bottom>
		</div>
	);	
};

export default Members;
