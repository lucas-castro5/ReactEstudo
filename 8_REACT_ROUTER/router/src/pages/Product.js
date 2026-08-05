import { data, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { use } from "react"
import { Link } from "react-router-dom"
const Product = () => {
    // rota dinamica
    const { id } = useParams()

    // carregamento de dado individual
    const url = "http://localhost:3000/products/" + id;

    const {data:product, loading,error} = useFetch(url)

    console.log(product)

    return (
        <>
            <p>Id do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    {/* 6 - Nested routes */}
                    <Link to={`/products/${product.id}/info`}>Mais infromações</Link>
                </div>
            )}
        </>
    )
}

export default Product