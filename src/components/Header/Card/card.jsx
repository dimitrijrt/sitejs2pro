import PropTypes from 'prop-types'

import styled from 'styled-components'




function Card({ title , description, rating }) {
    return (
        <CardWrapper>
            <CardLabel>{title}</CardLabel>
            <p>{description}</p>
            <span>{rating}</span>
        </CardWrapper>
    )
}


const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;

    p {
        font-size:30px;
        color:white;
    }
`





Card.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
}



Card.defaultProps = {
  title: '',
  description: '',
  rating: '',
}


const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: salmon;
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
export default Card