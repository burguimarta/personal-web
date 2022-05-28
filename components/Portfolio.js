import PortfolioItem from "./PortfolioItem";

export default function Porfolio(props) {
    const data = props.items.map((item) => {
        return <PortfolioItem item={item}></PortfolioItem>
    })

    return (
        <>
            <h2>Portfolio</h2>

            {data}

        </>
    );
}