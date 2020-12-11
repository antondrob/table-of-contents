export default function Save(props) {
	return (
		<div>
			<h2>{props.attributes.title}</h2>
			<div className="toc" dangerouslySetInnerHTML={{__html: props.attributes.content}}/>
		</div>
	);
}
