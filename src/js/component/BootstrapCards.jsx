import React from "react";
import BootstrapCard from "./BootstrapCard.jsx";

const cards = [
	{
		id: 1,
		imgSrc:
			"https://as.com/meristation/imagenes/2021/05/19/noticias/1621412307_038579_1621412358_noticia_normal_recorte1.jpg",
		cardTitle: "Card title 1",
		cardDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		buttonLabel: "Find out more"
	},
	{
		id: 2,
		imgSrc:
			"https://4.bp.blogspot.com/-YxKJxL_qzvQ/XUZAOEHwiZI/AAAAAAAAmYs/lAnqYsvs_L0aJEkOVZc2KS2m-PuzNDOFQCLcBGAs/s1600/episodio-one-piece-sin-relleno.jpg",
		cardTitle: "Card title 2",
		cardDescription: "Sed pretium semper tincidunt. Suspendisse..",
		buttonLabel: "Find out more"
	},
	{
		id: 3,
		imgSrc: "https://blogs.esa.int/space19plus/files/2019/03/nebula.jpg",
		cardTitle: "Card title 3",
		cardDescription: "In fermentum, ligula eget tincidunt venenatis.",
		buttonLabel: "Find out more"
	},
	{
		id: 4,
		imgSrc:
			"https://as.com/meristation/imagenes/2021/05/19/noticias/1621412307_038579_1621412358_noticia_normal_recorte1.jpg",
		cardTitle: "Card title 4",
		cardDescription: "Mauris pretium felis sit amet pharetra vestibulum.",
		buttonLabel: "Find out more"
	}
];

const BootstrapCards = () => {
	return (
		<div className="container mb-2">
			<div className="row">
				{cards.map(card => {
					return (
						<div className="col-sm-3 col-12" key={card.id}>
							<BootstrapCard
								image={card.imgSrc}
								title={card.cardTitle}
								description={card.cardDescription}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BootstrapCards;
