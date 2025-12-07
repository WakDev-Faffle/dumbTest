export default function (message, timeout) {
	setTimeout(() => window.alert(message), timeout);
	console.log('success !');
}
