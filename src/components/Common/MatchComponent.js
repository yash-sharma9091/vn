export function exportPath(props) {
	const pathname = props.location.pathname.split('/')[1];
	return pathname;
}