(()=>{
	const iframe = document.getElementById('chat-assistant');

	const sendScreenSize = () =>{
		const screenSize = {
			width: window.innerWidth,
			height: window.innerHeight,
		};
		console.log('called screenSize', screenSize);

		iframe.contentWindow.postMessage({
			action: 'computedScreenSize',
			screenSize,
		}, '*');
	};

	window.addEventListener('message', function (event) {
		if (event.data.action === 'changeIframeSize') {
			console.log('setIFrameParent');

			iframe.style.height = event.data.height;
			iframe.style.width = event.data.width;
		}
		if (event.data.action === 'changeAligment') {
			iframe.style.inset = event.data.inset;
		}
		if (event.data.action === 'getScreenSize') {
			sendScreenSize();
		}
	});
	window.addEventListener('resize', sendScreenSize);
})();
