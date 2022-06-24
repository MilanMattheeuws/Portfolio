import "./style/screen.scss";

function App() {
	return (
		<main>
			<div className="p-home">
				<div className="left-side"></div>
				<div className="line"></div>
				<div className="right-side">
					<h1 className="title">Milan Mattheeuws</h1>
					<h2 className="subtitle">Student Howest Kortrijk</h2>
					<p className="text">
						Hello there. I am Milan Mattheeuws, a student
						<br />
						MCT next web development in Kortrijk. I mainly
						<br />
						do Frontend and designing.
					</p>
					<div className="buttons">
						<button id="resume" name="resume" className="resume">
							Resume
						</button>
						<button id="about" name="about" className="about">
							About me
						</button>
					</div>
				</div>
				<div className="picture">
					<img className="image" src="https://pikadev.fi/assets/code.svg"></img>
				</div>
				<footer>
					<p></p>
				</footer>
			</div>
		</main>
	);
}

export default App;
