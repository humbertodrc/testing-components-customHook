import "./App.css";

import {createUseStyles} from "react-jss";
import logo from "./assets/logo.svg";
import {Character} from "./components/Character";
import {Modal} from "./components/Modal";
import useModal from "./hooks/useModal";

const useStyles = createUseStyles({
	myButton: {
		backgroundColor: "rgb(0, 190, 171)",
		cursor: "pointer",
		padding: "0.5rem",
		textTransform: "uppercase",
		border: "none",
		fontSize: " 18px",
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: "rgb(0, 212, 191)",
		},
		"&not(:first-child)": {
			marginLeft: "24px",
		},
	},
});

function App() {
	const {isShowing: isAliveShowed, toggle: toggleAlive} = useModal();
	const {isShowing: isDeadShowed, toggle: toggleDead} = useModal();

	const classes = useStyles();

	return (
		<div className="App">
			<img src={logo} />
			<div>
				<button className={classes.myButton} onClick={toggleAlive}>
					<p>Rick's vivos</p>
				</button>

				<button className={classes.myButton} onClick={toggleDead}>
					<p>Rick's vivos</p>
				</button>
			</div>

			<Modal isShowing={isAliveShowed} hide={toggleAlive} title="Rick's vivos">
				<Character status="alive" />
			</Modal>

			<Modal isShowing={isDeadShowed} hide={toggleDead} title="Rick's muertos">
				<Character status="dead" />
			</Modal>
		</div>
	);
}

export default App;
