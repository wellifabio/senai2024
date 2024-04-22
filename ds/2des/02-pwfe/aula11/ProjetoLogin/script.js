function loginWithGitHub() {
window.location.href = 'https://github.com/login/oauth/authorize?client_id=5381e2d8a6ae7f2090c6&scope=user';
}
const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if(error === 'access_denied') {
window.location.href = 'index.html';
}