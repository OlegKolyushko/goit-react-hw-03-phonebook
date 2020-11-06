import React from 'react';
import PropTypes from 'prop-types';

function Filter({value, handlerFilter}) {
    return (
        <div>
            <label>
        Search contacts by name
            <input type="text" value={value} onChange={e => handlerFilter(e.target.value)} ></input>
            </label>
        </div>
    )

};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handlerFilter: PropTypes.func.isRequired,
}

export default Filter;