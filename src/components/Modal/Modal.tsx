import React from "react";
import ReactDOM from "react-dom";
import {createUseStyles} from "react-jss";
import "./style.css";

const useStyle = createUseStyles({
	modalOverlay: {
		position: "fixed",
		top: "0",
		left: "0",
		width: "100vw",
		height: "100vh",
		zIndex: "999",
		backgroundColor: "rgba(14, 14, 14, 0.5)",
		overflowY: "auto",
	},
	modalWrapper: {
		position: "absolute",
		top: "56px",
		left: "0",
		zIndex: "9999",
		width: "100%",
		height: "100%",
		outline: "0",
		display: "flex",
		alignItems: "center",
	},
	modal: {
		backgroundColor: "rgb(237, 237, 237)",
		position: "relative",
		margin: "auto",
		borderRadius: "4px",
		maxWidth: "700px",
		padding: "24px",
	},
	modalHeader: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& h4": {
			fontSize: "24px",
		},
	},
	modalCloseButton: {
		fontSize: "16px",
		fontWeight: "600",
		color: "rgb(20, 20, 20)",
		cursor: " pointer",
		padding: " 8px 16px",
		border: "none",
		backgroundColor: "rgb(0, 190, 171)",
		borderRadius: "4px",
	},
});

export interface ModalInterface {
	isShowing: boolean;
	hide: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal: React.FC<ModalInterface> = ({
	isShowing,
	hide,
	title,
	children,
}) => {

  const classes = useStyle();

	return isShowing
		? ReactDOM.createPortal(
				<>
					<div className={classes.modalOverlay}>
						<div className={classes.modalWrapper}>
							<div className={classes.modal}>
								<div className={classes.modalHeader}>
									<h4>{title}</h4>
									<button className={classes.modalCloseButton} onClick={hide}>
										Cerrar
									</button>
								</div>
								<div>{children}</div>
							</div>
						</div>
					</div>
				</>,
				document.body
		  )
		: null;
};

export default Modal;
