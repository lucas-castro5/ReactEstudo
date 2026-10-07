import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    // gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        setName(e.target.value)
    }
    // console.log(name)
    // console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("enviando o form")
        console.log(name, email,bio,role)
        //limpar form
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")
    return (
        <div>
            {/* 1-criacao de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="digite seu nome"
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/* label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    <input type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/* text area */}
                <label >
                    <span>Bio:</span>
                    <textarea
                        name="bio"
                        placeholder="Descrição do usuario"
                        onChange={ (e)=> setBio(e.target.value)}
                        value={bio }
                    ></textarea>
                </label>
                {/* select */}
                <label >
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                        <option value="user">Usuario</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export default MyForm