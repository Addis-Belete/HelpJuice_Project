import styles from "../../styles/SearchBar.module.css";
import Image from 'next/image'
import rabbit from '../assets/rabbit.png';
import icon from "../assets/icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faArrowDown, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faClock, faArrowDown, faCircleCheck);
export default function SearchBar() {

	return (
		<div className={styles.div}>
			<div>
				<div className={styles.p}>p</div> <span>|</span>


				<div><FontAwesomeIcon icon={faClock} style={{ paddingRight: "5px" }} />0min <span>|</span></div>
				<div style={{ marginTop: "5px" }}><Image
					src={rabbit}
					alt="rabbit"
					width={25}
					height={30}
					layout="fixed"
				/> </div><span>|</span>
				<div ><FontAwesomeIcon icon={faArrowDown} style={{ paddingRight: "5px", transform: "rotate(45deg)", marginTop: "5px" }} />0 </div>

			</div>
			<div>
				<Image
					src={icon}
					alt="rabbit"
					width={150}
					height={30}
					layout="fixed"

				/>
			</div>

		</div>)


}