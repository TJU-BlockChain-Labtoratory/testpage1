import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';
import { nextPage, prePage,toPage} from './functions.js';
import Bottom from '../../components/bottom';

const numOfNews = 3;

const blogs = (props) => {
	if(props.url.lastIndexOf("/") == props.url.length-2){
		props.url = props.url.substr(0,props.url.length-2);
	}
	const [data, isLoading] = usePrerenderData(props);

	var currPage = Number(props.currPage);
	return (
	<div>
		<div class={style.pageNewsAndNotices}>
			<Link class={style.pageTitle} href={`/blogs/${0}`}>新闻动态</Link>
			<Link class={style.pageTitle} href="/QR_code">行业洞察</Link>  
			{ getNewsListing(data, isLoading,numOfNews, currPage) }
		</div>
		<div class={style.wholepage}>
			<Bottom></Bottom>
		</div>
	</div>
	);
};

function getNewsListing(data, isLoading ,pageSize, currPage) {
	if (isLoading) {
		return (
			
			<article class={style.loadingPlaceholder}>
				<h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
			</article>
		);
	}
	if (data && data.data) {
		console.log(data.data)
			const { data: blogs } = data;
			var news = new Array();
			var j = currPage * pageSize;

			for(let i = j; i < blogs.edges.length; i++ ){
				var temp = blogs.edges[i].details.tags.split(',');
				let judge = temp.every(function (temp){
					return temp != "achievement";
				});
				if(judge == true){
					
						news[j] = blogs.edges[i];
						j++;
					
					if( j >= ((currPage+1)*pageSize)){
						break;
					}
				}		     
			}

			let totalPage = Math.ceil(blogs.edges.length/pageSize); 


			return (
				 <div class={style.formWrapper}>
					<div class={style.pageBody}>
						{news.map(blog => (
						<Link href={`/blog/${blog.id}`}>
							<article class={style.block}>
								<h2>{blog.details.title}</h2>
								<div>
									{
										<span class={style.tag}>{blog.details.tags.split(",")[0]}</span>
									}
								</div>
								<p class={style.preview}>
									{blog.preview}
								</p>
							</article>
						</Link>
					))}
					</div>
					<div>
						{ getIndex(data.url, currPage, totalPage)}
					</div>
				 </div>
				
			);
		}

		else if(data && !data.data){
			return(
				<div class={style.formWrapper}>
					<div class={style.pageBody}>
						<div>
							暂无新闻公告
						</div>
					</div>
				</div>
				
			)
		}
	
}




function getIndex(url, currPage ,totalPage){
		var firstPage = Math.max(1,currPage-1);
		var lastPage = Math.min(totalPage , firstPage+7);
	var arr = new Array(lastPage-firstPage+1);
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = i;
    }

	return (
		<div class={style.indexContainer}>
			<div class={style.pagination}>
				<ul class={style.index}>
					<li><a href =""onClick={() => prePage(currPage , url)}>«</a></li>
					{
						arr.map((value) =>{
							if(value+firstPage == currPage+1){
								return <li><a class={style.active}>{value+firstPage}</a></li>
							}
							return <li><a href="" onClick={()=>toPage(value+firstPage-1 , totalPage , url)}>{value+firstPage}</a></li>
						})
					}
					<li><a href =""onClick={() => nextPage(currPage, totalPage ,url)}>»</a></li>
				</ul>
			</div>
		</div>	
	);

}
export default blogs;
