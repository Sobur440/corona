import './CoroCountries.css'
const CoroCountries = ({country}) => {
  return (
    <div className="coro-country">
      <img src={country.img} alt="CORO COUNTRY" className="coro-country-img" />
      <p className="case">
        <span className='cases-amount'>{country.cases}</span> <br />
        {country.name} total cases
      </p>
    </div>
  )
}

export default CoroCountries