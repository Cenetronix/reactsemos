import PropTypes from "prop-types"
const Student = (props) => {

    const { shouldTheComponentShow, name, age, fruits } = props


    // ternaren 
    // if (props.shouldTheComponentShow){
    //     console.log("true")
    // } else {
    //     console.log("false")
    // }

    // props.shouldTheComponentShow ? console.log("true") : console.log("false")

    // console.log(props)

    // conditional rendering


    if (!shouldTheComponentShow) {
        return null
    }


    return shouldTheComponentShow &&
        <div>
            <h1>Student</h1>
            <div>Name:{name}</div>
            <div>Age:{age}</div>
            <div>ShoulShow:{shouldTheComponentShow}</div>
            <div>Fruits: {fruits.map(fruit => {
                return <li key={fruit}>{fruit}</li>
            })}</div>

        </div>
}

export default Student 

Student.propTypes = {
    shouldTheComponentShow : PropTypes.bool,
    name : PropTypes.string,
    age : PropTypes.number,
    fruit : PropTypes.arrayOf(PropTypes.string)
}