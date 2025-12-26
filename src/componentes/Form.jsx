import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
    const wpp = '5581992384292';

    // Gerenciamento de Estado para E-mail e Mensagem
    const [formData, setFormData] = useState({
        email: '',
        mensagem: '',
    });

    // Função para atualizar o estado quando um input muda
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, mensagem } = formData;

        if (!email || !mensagem) {
            console.error('Por favor, preencha o email e a mensagem.');
            return;
        }

        // Formata a mensagem para o WhatsApp
        const whatsappMessage = `*Nova Mensagem de Contato:*\n` +
            `*E-mail:* ${email}\n` +
            `*Mensagem:* ${mensagem}`;

        const whatsappURL = `https://api.whatsapp.com/send?phone=${wpp}&text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, '_blank');

        // Limpa o formulário
        setFormData({ email: '', mensagem: '' });
    };

    return (
        <StyledWrapper>
            <div className="form-container z-10">
                <form className="form " onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Solicite um orçamento</label>
                        <textarea name="mensagem" id="mensagem" rows={10} cols={50} value={formData.mensagem} onChange={handleChange} required />
                    </div>
                    <button className="form-submit-btn" type="submit">Enviar Mensagem</button>
                </form>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* ... seu CSS do Styled Components continua igual aqui ... */
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
    z-index: 10;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .form-container button:active { scale: 0.95; }
  .form-container .form { display: flex; flex-direction: column; gap: 20px; }
  .form-container .form-group { display: flex; flex-direction: column; gap: 2px; }
  .form-container .form-group label { display: block; margin-bottom: 5px; color: #717171; font-weight: 600; font-size: 12px; }
  .form-container .form-group input { width: 100%; padding: 12px 16px; border-radius: 8px; color: #fff; font-family: inherit; background-color: transparent; border: 1px solid #414141; }
  .form-container .form-group textarea { width: 100%; padding: 12px 16px; border-radius: 8px; resize: none; color: #fff; height: 96px; border: 1px solid #414141; background-color: transparent; font-family: inherit; }
  .form-container .form-group input:focus, .form-container .form-group textarea:focus { outline: none; border-color: #e81cff; }
  .form-container .form-submit-btn { display: flex; align-items: flex-start; justify-content: center; align-self: flex-start; font-family: inherit; color: #717171; font-weight: 600; width: 40%; background: #313131; border: 1px solid #414141; padding: 12px 16px; font-size: inherit; gap: 8px; margin-top: 8px; cursor: pointer; border-radius: 6px; }
  .form-container .form-submit-btn:hover { background-color: #fff; border-color: #fff; }

  @media (max-width: 800px){
    .form-container{
        width: 350px;
    }   
}
`;

export default Form;