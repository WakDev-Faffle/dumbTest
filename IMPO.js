export function sM(message, timeout) {
	setTimeout(() => window.alert(message), timeout);
	console.log('success !');
}
