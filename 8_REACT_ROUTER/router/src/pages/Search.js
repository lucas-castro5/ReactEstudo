import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams();

    const url =
        "http://localhost:3000/products?name=" +
        searchParams.get("q");

    const { data: items, loading, error } = useFetch(
        "http://localhost:3000/products"
    );

    const query = searchParams.get("q");

    const filteredItems = items?.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    return (<div>
        <h1>Resultado disponiveis</h1>
        {error && <p>{error}</p>}
        <ul className="products">
            {filteredItems && filteredItems.map((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$: {item.price}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>
    );

}

export default Search