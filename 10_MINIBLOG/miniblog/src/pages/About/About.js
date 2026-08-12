// CSS
import styles from './About.module.css'
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>
        O Mini Blog é uma plataforma desenvolvida com React e Firebase que
        permite aos usuários criar, compartilhar e gerenciar publicações de
        forma simples e intuitiva. O projeto foi criado com o objetivo de
        praticar conceitos modernos de desenvolvimento web, como autenticação,
        gerenciamento de estado, roteamento e integração com banco de dados
        em tempo real.
      </p>
      <Link to="/posts/create" className="btn"> Criar post</Link>
    </div>
  )
}

export default About