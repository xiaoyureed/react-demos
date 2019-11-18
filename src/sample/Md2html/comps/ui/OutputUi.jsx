import React from 'react';
import PropTypes from 'prop-types';
import css from './OutputUi.module.css';

const OutputUi = ({html, onClick}) => (
    <div className={css.output}>
      <div>
        <span>
          html
        </span>
        {' ============> '}
        <button onClick={onClick} type="button">
          copy
        </button>
      </div>
      <div className={css.content} id="htmlDiv" dangerouslySetInnerHTML={{__html: html}}/>
    </div>
);

OutputUi.propTypes = {
  html: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // flag: PropTypes.number.isRequired,
};

export default OutputUi;
