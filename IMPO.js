export function sendMessage(message, timeout) {
	setTimeout(() => window.alert(message), timeout);
	console.log('success !');
}
