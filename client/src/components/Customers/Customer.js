const Customer = ({customer}) => {

    return (
        <div id="info">
            <h3>{customer.name}</h3>
            <p>Location: {customer.town}</p>
            <p>Age: {customer.age}</p>
        </div>
    )
}

export default Customer;