## @Arquivos principais onde está a função do componente deve ser chamado de index.jsx e o CSS principal de styles.css tudo dentro da pasta do componente e o componente sendo declarado com letra maiúscula e utilizando o padrão de declaração de variáveis CamelCase, exemplo:
    
    SignIn <-- nome da pasta do componente em CamelCase
        index.jsx <---- arquivo principal do componente
        styles.css <--- arquivo CSS principal do componente
    
-------------------------------------------------------------------
## @componentes funcionais com props desestruturadas:

export default function NomeDoComponente({ propriedade1, propriedade2 }) {
    return (

    )
}

-------------------------------------------------------------------
## @componentes que forem pertinente a apenas uma página deverão está dentro da página referente, exemplo da page Authenticate, recebe componentes que só serão utilizados por ela.

Authenticate
    SignIn
        index.jsx <---- arquivo principal do componente
        styles.css
    SignUp
        index.jsx
        styles.css
    index.jsx <---- arquivo principal de Authenticate
    styles.css <--- CSS principal de Authenticate

-------------------------------------------------------------------
## @Priorizar o uso do HTML semântico.
## @Priorizar identação correta do Código, obedecendo hierarquia entre elementos html e atributos/propriedades de tags.
## @A className de um elemento deve referenciar de onde ele pertence para evitarmos confitos em estilos, exemplo:

errado (
    <div className='navbar'>
        <div className='logo'><h3>Con3kta</h3></div>
        <button className='button'>Login</button>
    </div>
)

correto (
    <nav className='navigation-container'>
        <span className='navigation-logo'>Con3kta</span>
        <button className='navigation-button'>Login</button>
    </nav>
)