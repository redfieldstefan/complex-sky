const canvasTemplate = (base, filenames) => {
	const navList = filenames.map(({base}) => `<li class="nav-item"><a href="${base}.html">${base}</a></li>`).reduce((accum, val) => accum + val, "");

	return {
		filename: `${base}.html`,
		inject: false,
	  templateContent: `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<title>${base}</title>
				</head>
				<style>
					@font-face {
					    font-family: myFirstFont;
					    src:'fonts/OpenSans-Regular.ttf';
					}

					* {
							margin: 0;
							padding: 0;
							box-sizing:border-box; 
						 -moz-box-sizing:border-box; 
						 -webkit-box-sizing:border-box; 
						 -ms-box-sizing:border-box;
						 font-family: 'Open Sans', sans-serif;
					}


					html {
						height: 100%;
					}

					body {
						height: 100%;
						display: flex;
					}

					.nav-item {
						text-transform: uppercase;
						display: block;
					}

					#container {
						display: flex;
				    flex-direction: column;
				    justify-content: center;
				    margin: auto;
					}

					#placeholder {
						position: absolute;
						align-self: center;
					}
				</style>
				<body>
					<nav>
						${navList}
					</nav>
					<div id="container">
						<p id="placeholder">Hold on...</p>
					</div>
				</body>
				<script src="./${base}.bundle.js"></script>
			</html>
	  `
	}
}

module.exports = canvasTemplate;
