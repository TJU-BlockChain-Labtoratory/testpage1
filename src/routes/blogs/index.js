import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
	<div>
		<div class={style.pageBlogs}>
			<h1 class={style.pageTitle}>新闻</h1>
			{ getListing(data, isLoading) }
		</div>
	    <div class={style.pageBlogs}>
			<h1 class={style.pageTitle}>公告</h1>
			{ getNoticesListing(data, isLoading) }
	    </div>
	</div>
	);
};

function getListing(data, isLoading) {
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
		return (
			<>
				{blogs.map(blog => (
				<Link href={`/blog/${blog.id}`}>
					<article class={style.block}>
						<h2>{blog.details.title}</h2>
						<div>
							{
								(blog.details.tags.substr(1, blog.details.tags.length - 2).split(',') || []).map(tag => <span class={style.tag}>{tag}</span>)
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
