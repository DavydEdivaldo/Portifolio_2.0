import React from 'react';
import styled from 'styled-components';

const Button = ({text}) => {
  return (
    <StyledWrapper>
      <div aria-label={`${text} Button`} tabIndex={0} role="button" className="user-profile">
        <div className="user-profile-inner">
          <p>{text}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .user-profile {
    width: 100%;
    max-width: 131px;
    height: 51px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s ease;
    background: linear-gradient(
      to bottom right,
      #2e8eff 0%,
      rgba(46, 142, 255, 0) 30%
    );
    background-color: rgba(46, 142, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-profile:hover,
  .user-profile:focus {
    background-color: rgba(46, 142, 255, 0.7);
    box-shadow: 0 0 10px rgba(46, 142, 255, 0.5);
    outline: none;
  }

  .user-profile-inner {
    width: 100%;
    max-width: 127px;
    height: 47px;
    border-radius: 13px;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    color: #fff;
    font-weight: 600;
    font-size: clamp(0.8rem, 2vw, 1rem); /* ajusta tamanho da fonte */
    padding: 0 16px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .user-profile {
      max-width: 100px;
      height: 42px;
    }

    .user-profile-inner {
      max-width: 96px;
      height: 38px;
      font-size: 0.75rem;
    }
  }
`;


export default Button;
