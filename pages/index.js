import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
export default function () {
	const [title, setTitle] = useState("");
	const [titles, setTitles] = useState([]);
	const [list, setList] = useState("");
	const data = [{ "type": "heading 1", "shortcut": "shortcut: type # + space" }, { "type": "expandable heading 1", "shortcut": "shortcut: type >># + space" }]


	const filterData = (e) => {
		setTitle(e.target.value)
		const result = data.filter((val) => {

			const fil = e.target.value.length == 0 ? "" : e.target.value.substr(1, e.target.value.length - 1);
			console.log(fil);
			if (fil === "") return "";
			return val.type.toLowerCase().includes(fil.toLowerCase())
		})
		setList(result)


	}
	const saveTitle = (e) => {
		if (e.key == "Enter") {
			if (title.length > 0) {
				if (typeof window !== undefined) {
					let titles = JSON.parse(localStorage.getItem("headings"));
					if (titles !== null) {
						localStorage.setItem(
							"headings",
							JSON.stringify([...titles, title.trim()])
						);
					} else {
						localStorage.setItem("headings", JSON.stringify([title.trim()]));
					}
					setTitle("");
					const checkout = JSON.parse(localStorage.getItem("headings"));
					setTitles(checkout);
				}
			} else {
				alert("Input title");
			}
		}
	};

	const remove = (index) => {
		let titles = JSON.parse(localStorage.getItem("headings"));
		const removed = titles[index];
		const filtered = titles.filter((val) => {
			return val != removed;
		});
		console.log(filtered);
		localStorage.setItem("headings", JSON.stringify(filtered));
		const checkout = JSON.parse(localStorage.getItem("headings"));
		setTitles(checkout);
	};
	useEffect(() => {
		const checkout = JSON.parse(localStorage.getItem("headings"));
		setTitles(checkout);
	}, []);


	return (
		<div>
			<NavBar />
			<SearchBar />
			<div className={styles.description}>
				<h2>
					<span>front-end</span> developer test project
				</h2>
				<p>
					<span>your</span> goal is to make page that looks exactly like this
					one, and has the ability to create H1 text simply by typing / then 1,
					then typing text, and hitting enter
				</p>
				<div>
					<div>
						{titles == null
							? ""
							: titles.map((val, index) => {
								if (val.startsWith("/1")) {
									const tit = val.substr(2, val.length - 1);
									return (
										<div key={index} className={styles.titles}>
											<h1>{tit}</h1>
											<button onClick={() => remove(index)}>Remove</button>
										</div>
									);
								} else {
									return (
										<div key={index} className={styles.titles}>
											<p>{val}</p>
											<button onClick={() => remove(index)}>Remove</button>
										</div>
									);
								}
							})}
					</div>
					<input
						placeholder="Heading 1"
						value={title}
						onChange={(e) => filterData(e)}
						onKeyDown={(e) => saveTitle(e)}
					></input>
					<Card data={list} />
				</div>
			</div>
		</div>
	);
}
