import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
height:100vh;
width:100%;
background-color:white;
`

const PortfolioView = ({ id }) => {
    return (
        <StyledWrapper id={id}>
            Portfolio
            GunIGUNI
        </StyledWrapper>
    )
}

export default PortfolioView
