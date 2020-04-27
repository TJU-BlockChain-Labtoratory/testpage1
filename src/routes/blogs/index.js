import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<div class={style.pageBlogs}>
			<h1 class={style.pageTitle}>新闻</h1>
			{ getBlogsListing(data, isLoading) }
		</div>
	);
};

function getBlogsListing(data, isLoading) {
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
		const { data: blogs } = data;
		
		var notnews = new Array();
		var j = 0;
		for( var i = 0; i < blogs.edges.length ; i++ )
		  if ( blogs.edges[i].details.tags.substr(0,blogs.edges[i].details.tags.length).split(',')[0] != 'news')
		  { 
	         notnews[j] = blogs.edges[i];
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
								(blog.details.tags.substr(0, blog.details.tags.length).split(',') || []).map(tag => <span class={style.tag}>{tag}</span>)
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
