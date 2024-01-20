import React from "react"
import * as formStyles from "./form.module.scss"

function FormComponent(props) {
    return (
        <main className={formStyles.form}>
            <div className={formStyles.header}>
                <h1>School Trip Information Form</h1>
            </div>
            <form className={formStyles.formContent}>
                <h3>Full Name & Age</h3>
                <div className={formStyles.name}>
                    <input 
                        name="firstName" 
                        value={props.data.firstName} 
                        onChange={props.handleChange} 
                        placeholder="First Name" 
                    />
                    <br />
                
                    <input 
                        name="lastName" 
                        value={props.data.lastName}
                        onChange={props.handleChange} 
                        placeholder="Last Name" 
                    />
                    <br />
                
                    <input 
                        name="age" 
                        value={props.data.age}
                        onChange={props.handleChange} 
                        placeholder="Age" 
                    />
                    <br />
                </div>
                
                <h3>Gender</h3>
                <div className={formStyles.section}>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange}
                        /> Male
                    </label>
                    <br />
                
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange}
                        /> Female
                    </label>
                    <br />

                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="other"
                            checked={props.data.gender === "other"}
                            onChange={props.handleChange}
                        /> Other
                    </label>
                    <br />
                </div>
                
                <h3>Trip Destination</h3>
                <div className={formStyles.section}>
                    <select 
                        value={props.data.destination} 
                        name="destination" 
                        onChange={props.handleChange}
                    >
                        <option value="">-- Select Destination --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>
                
                    <br />
                </div>
                
                <h3>Dietary Restrictions</h3>
                <div className={formStyles.section}>
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={props.handleChange}
                            checked={props.data.isVegan}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={props.handleChange}
                            checked={props.data.isKosher}
                        /> Kosher?
                    </label>
                    <br />
                
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={props.handleChange}
                            checked={props.data.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />
                </div>
            </form>

            <hr />
            <div className={formStyles.answers}>
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>

                <p>Your dietary restrictions:</p>
                <div className={formStyles.section}>            
                    <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
                </div>

                <button className={formStyles.submit} onClick={() => window.location.reload(false)}>Submit</button>
            </div>            
        </main>
    )
}

export default FormComponent