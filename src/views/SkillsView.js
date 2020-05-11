import React from 'react'
import styled from 'styled-components'

const StyledSkillsView = styled.div`
    height: 100%;
    width: 100%;
    background: black;
`


const SkillsView = ({ id, name }) => {
    return (
        <StyledSkillsView id={id} name={name}>
            skills
        </StyledSkillsView>
    )
}

export default SkillsView
