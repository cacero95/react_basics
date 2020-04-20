import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// another way to declare a function en este caso retorna true or false
// const mayorEdad = edad => edad > 18;

const Card = ({src,title,descrption}) => (
    <Fragment>

    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src={src} alt="article"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            {title}
          </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src="https://i0.wp.com/elpalomitron.com/wp-content/uploads/2020/03/Tercera-temporada-Oregairu-ElPalomitron.jpg?resize=750%2C445&ssl=1" alt="avatar"/>
                </div>
              </div>
              <span className="small">{descrption}</span>
            </div>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">Get In</a>
          </div>
        </div>
    </article>
    
    
    </Fragment>   
)

Card.propTypes = {
    src:PropTypes.string,
    title:PropTypes.string,
    descrption:PropTypes.string
}
Card.defaulProps = {
    title: "Title des not defined",
    src: "https://i0.wp.com/elpalomitron.com/wp-content/uploads/2020/03/Tercera-temporada-Oregairu-ElPalomitron.jpg?resize=750%2C445&ssl=1",
    descrption:"No defined"
}

export default Card;