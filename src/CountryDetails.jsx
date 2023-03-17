import React from 'react';

const CountryDetails = () => {

return (
    <div className='country-details'>
<button className=' back'>
<i class="fa fa-arrow-left" aria-hidden="true">
Go Back
</i>
</button>

<div className='country-details-body'>
<div className='img-container'>
    <img src='https://flagcdn.com/as.svg' alt='' />
</div>

<div className='info'>
<h2>Name</h2>
<div className='info-container'>
<div className='left-info'>
    <p>Native Name:{" "}
    <span className='values'>Test</span>
    </p>

    <p>Population:{" "}
    <span className='values'>Test</span>
    </p>

    <p>Region:{" "}
    <span className='values'>Test</span>
    </p>

    <p>Sub-region:{" "}
    <span className='values'>Test</span>
    </p>
</div>
<div className='right-info'>
<p>Capital:{" "}
    <span className='values'>Test</span>
    </p>

    <p>Top-level Domain:{" "}
    <span className='values'>Test</span>
    </p>

    <p>Currencies:{" "}
    <span className='values'>Test</span>
    </p>

    <p>Languages:{" "}
    <span className='values'>Test</span>
    </p>
</div>
</div>

Border Countries:
<div className='border-country'>
    <p>Test</p>
</div>
<div className='border-country'>
    <p>Test</p>
</div>
<div className='border-country'>
    <p>Test</p>
</div>

</div>
</div>
    </div>
)
}

export default CountryDetails;