class Wrapper extends HTMLElement {
	constructor() {
		super();

		this.innerHTML = `
			<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8">
					<title>Complex Sky</title>
				</head>
				<style>
					* {
							margin: 0;
							padding: 0;
							box-sizing:border-box; 
						 -moz-box-sizing:border-box; 
						 -webkit-box-sizing:border-box; 
						 -ms-box-sizing:border-box;
					}

					html {
						height: 100%;
					}

					body {
						height: 100%;
						display: flex;
					}

					#canvas {
						margin: auto;
					}
				</style>
				<body id="app">
					<canvas id="canvas"></canvas>
				</body>	
			</html>
		`;
	}
};

window.customElements.define('wrapper', Wrapper);
