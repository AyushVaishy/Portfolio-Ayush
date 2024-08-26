/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import githubIcon from "../../src/assets/github.svg"
import externalLink from "../../src/assets/external-link.svg"

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <div className="project-links">
        <h3 className="work__title">{item.title}</h3>
        <div className="project-link"><a href={item.githublink} target='_blank' className="work__button">
        <img src={githubIcon} /> </a>
        <a href={item.livelink} target='_blank' className="work__button">
        <img src={externalLink} /> </a> </div>
        </div>
    </div>
  )
}

export default WorksItems