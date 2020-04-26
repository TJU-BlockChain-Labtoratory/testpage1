import { h } from 'preact';
import style from './style';

const Members = (props) => {
	return (
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
								&emsp;&emsp;从事语音识别、机器学习、人机交互等方面的研究工作。主要研究内容为：将彩色图像与深度信息应用于语音识别研究，
								包括二维彩色图像特征提取及降噪降维处理、深度信息特征提取方法研究、音视频多通道特征融合及决策融合；对超声图像的降噪、特征
								提取、以及多流HMM应用研究；对机器学习算法的研究，包括音乐流派分类、哼唱识别、RoboCup 3D环境的机器人自定位、GPU高性能计算研究等。
								<br/>
								&emsp;&emsp;多年来一直担任天津大学RoboCup代表队指导教师、天津大学飞思卡尔智能车参赛队伍指导教师、天津大学Intel杯嵌入式专题邀
								请赛参赛队伍指导教师，获得多项国家级和地区级奖励。
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
								&emsp;&emsp;aelf创始人兼CEO，区块链行业专家，数字资产领域早期从业者 ， 曾任GemPay CTO ，现任IEEE计算机协会区块链和分布式记账委员会执行委员、
								中国电子协会区块链专家委员会委员、中国计算机学会区块链专业委员会委员，曾被人民网创投评为“2018年度区块链风云CEO”
							</font>
						</div>
					</div>
				</div>
			</div>
		</div>
	);	
};

export default Members;
