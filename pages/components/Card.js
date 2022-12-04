import styles from "../../styles/Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { } from "@fortawesome/free-solid-svg-icons";

library.add();
export default function Card() {

	return (
		<div className={styles.card}>

			<div className={styles.topCard}>
				<h5><span>add</span> blocks</h5>
				<span>Keep typing to filter, or escape to exit</span>
				<p>filtering keyword<span>1</span></p>
			</div>
			<div className={styles.bottomCard}>
				<div>
					<h1>t</h1>
					<div>
						<h5>heading 1</h5>
						<p>shortcut: type # + space</p>
					</div>


				</div>
				<div>
					<h1>t</h1>
					<div>
						<h5>Expandable Heading 1</h5>
						<p>{`shortcut: type >># + space`}</p>
					</div>


				</div>
			</div>

		</div>)

}