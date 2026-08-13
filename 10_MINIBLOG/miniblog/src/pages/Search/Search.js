import { Link } from 'react-router-dom'

import styles from './Search.module.css'
// hookes
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import PostDetail from '../../Components/PostDetail'

//components


const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)



    return (
        <div className={styles.search_container}>
            <h2>Resultado</h2>
            <div>
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encotrados posts a partir da sua busca...</p>
                        <Link to="/" className="btn bnt-dark">Voltar</Link>
                    </>
                )}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Search