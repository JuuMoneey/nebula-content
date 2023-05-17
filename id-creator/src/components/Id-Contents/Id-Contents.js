export default function GroceriesListItem(props) {
    const {idNumber, fullName, address, DOB, gender, height, eyeColor} = props.info
    return (
        <div className="idInfo">
            <h1>{idNumber} : {fullName} : {address} : {DOB} : {gender}: {height} : {eyeColor}</h1>
        </div>
    );
}