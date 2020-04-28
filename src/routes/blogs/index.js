import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
	<div>
		<div class={style.pageNewsAndNotices}>
			<h1 class={style.pageTitle}>新闻动态</h1>
			{ getNewsListing(data, isLoading) }
		</div>
	</div>
	);
};

function getNewsListing(data, isLoading) {
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
	console.log(data);
	if (data && data.data) {
		const { data: blogs } = data;
		
		var notnews = new Array();
		var j = 0;
		for( var i = 0; i < blogs.edges.length ; i++ ){
			 notnews[j] = blogs.edges[i];
			 console.log()
		     j++;
		  }
		

		return (
			<>
				{notnews.map(blog => (
				<Link href={`/blog/${blog.id}`}>
					<article class={style.block}>
						<h2>{blog.details.title}</h2>
						<div>
							{
								 <span class={style.tag}>{blog.details.time}</span>
							}
						</div>
						<p class={style.preview}>
							{blog.preview}
						</p>
					</article>
						
				</Link>
			))}
			</>
		);
	}
}

export default blogs;
