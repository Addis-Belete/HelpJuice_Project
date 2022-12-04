import styles from "../../styles/Card.module.css";
export default function Card({ data }) {
	return (
		<div
			className={styles.card}
			style={{ display: data.length == 0 ? "none" : "block" }}
		>
			{data.length == 0 ? (
				""
			) : (
				<div className={styles.topCard}>
					<h5>
						<span>add</span> blocks
					</h5>
					<span>Keep typing to filter, or escape to exit</span>
					<p>
						filtering keyword<span>1</span>
					</p>
				</div>
			)}
			<div className={styles.bottomCard}>
				{data.length == 0
					? ""
					: data.map((val, index) => {
						return (
							<div key={index}>
								<h1>t</h1>
								<div>
									<h5>{val.type}</h5>
									<p>{val.shortcut}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
