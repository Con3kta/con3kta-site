import React from 'react'
import './styles.css'
import user_default from '../../assets/user-default.jpg'

export default function CardUser({ userName, userImage, userOrganization, userStack }) {
    return (
        <div className='card-user-container'>
            <div className="card-header-container">
                <img
                    src={userOrganization}
                    alt={"local de trabalho"}
                    className="card-organization-logo"
                />
            </div>
            <div className="card-main-container">
                <img
                    src={userImage ? userImage : user_default}
                    alt="imagem do usuário"
                    className="user-image"
                />
                <span className="user-name">{userName ? userName : "Nome do Usuário"}</span>
            </div>
            <p className="user-stack">{userStack ? userStack : "Setor de Trabalho"}</p>
        </div>
    )
}
