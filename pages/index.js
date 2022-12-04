import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import styles from "../styles/Home.module.css";
export default function () {
	return (
		<div>
			<NavBar />
			<SearchBar />
			<div className={styles.description}>
				<h1><span>front-end</span> developer test project</h1>
				<p><span>your</span> goal is to make page that looks exactly like this one,  and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter</p>
			</div>

			<Card />
		</div>
	);
}
