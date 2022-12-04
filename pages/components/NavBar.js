import styles from "../../styles/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAnglesRight,
	faBookOpen,
	faLock,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAnglesRight, faBookOpen, faLock, faChevronDown);
export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li>
					<FontAwesomeIcon
						icon={faAnglesRight}
						style={{ color: "#6d7380", marginLeft: "-40px", fontSize: "12px" }}
					/>
				</li>
				<li>
					<FontAwesomeIcon icon={faBookOpen} style={{ paddingRight: "5px" }} />
					Main <span>/</span>
				</li>
				<li>
					Getting Started <span>/</span>
				</li>
				<li>Frontend Developer test proj...</li>
			</ul>

			<ul className={styles.ul}>
				<li>
					<FontAwesomeIcon icon={faLock} style={{ paddingRight: "5px" }} />
					Editing
				</li>
				<span className={styles.bar}></span>
				<li style={{ color: "#4974b1" }}>
					Publish Space{" "}
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{
							paddingRight: "5px",
							marginRight: "30px",
							paddingLeft: "20px",
						}}
					/>
				</li>
			</ul>
		</nav>
	);
}
