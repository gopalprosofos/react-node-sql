import React, { useState } from 'react';
import './form.css';
import Axios from "axios";

function DataForm() {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    const [ext, setExt] = useState("");
    const [fax, setFax] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [datasource, setDatasource] = useState("");
    const [advisor, setAdvisor] = useState("");

    const [advisorList, setAdvisorList] = useState([]);

    const addAdvisor = () => {
        Axios.post("https://dbapplication.lesindian.com/create", {
          first_name: first_name,
          last_name:last_name,
          company:company,
          street:street,
          city:city,
          province:province,
          pincode:pincode,
          phone:phone,
          ext:ext,
          fax:fax,
          website:website,
          email:email,
          datasource:datasource,
          advisor:advisor
        }).then(() => {
          setAdvisorList([
            ...advisorList,
            {
                first_name: first_name,
                last_name:last_name,
                company:company,
                street:street,
                city:city,
                province:province,
                pincode:pincode,
                phone:phone,
                ext:ext,
                fax:fax,
                website:website,
                email:email,
                datasource:datasource,
                advisor:advisor,
            },
          ]);
        });
      };

    return (
        <div className="App">
            <h1>Data Form</h1>
            <br></br>

            <div className="form">
                <h3>Personal Details</h3>
                <label>First Name :</label>
                <input type="text" name="first_name" placeholder="Enter First Name"  onChange={(event) => {
                    setFirstName(event.target.value);
          }}
        />
                <label>Last Name :</label>
                <input type="text" name="last_name" placeholder="Enter Last Name"  onChange={(event) => {
                    setLastName(event.target.value);
          }}
        />
                <label>Company :</label>
                <input type="text" name="company" placeholder="Enter Company Name"  onChange={(event) => {
                    setCompany(event.target.value);
          }}
        />
                
                <h3>Address</h3>
                <label>Street :</label>
                <input type="text" name="street" placeholder="Enter Street"  onChange={(event) => {
                    setStreet(event.target.value);
          }}
        />
                <label>City :</label>
                <input type="text" name="city" placeholder="Enter City Name"  onChange={(event) => {
                    setCity(event.target.value);
          }}
        />
                <label>Province :</label>
                <input type="text" name="province" placeholder="Enter Province"  onChange={(event) => {
                    setProvince(event.target.value);
          }}
        />
                <label>Pincode :</label>
                <input type="text" name="pincode" placeholder="Enter Pincode"  onChange={(event) => {
                    setPincode(event.target.value);
          }}
        />
                
                <h3>Contact Details</h3>
                <label>Phone :</label>
                <input type="text" name="phone" placeholder="Enter Phone number"  onChange={(event) => {
                    setPhone(event.target.value);
          }}
        />
                <label>Ext :</label>
                <input type="text" name="ext" placeholder="Enter Ext"  onChange={(event) => {
                    setExt(event.target.value);
          }}
        />
                <label>Fax :</label>
                <input type="text" name="fax" placeholder="Enter Fax Number"  onChange={(event) => {
                    setFax(event.target.value);
          }}
        />

                <h3>Professional Details</h3>
                <label>Website :</label>
                <input type="text" name="website" placeholder="Enter Website"  onChange={(event) => {
                    setWebsite(event.target.value);
          }}
        />
                <label>Email :</label>
                <input type="text" name="email" placeholder="Enter Email ID"  onChange={(event) => {
                    setEmail(event.target.value);
          }}
        />
                <label>Data Source :</label>
                <input type="text" name="datasource" placeholder="Enter Data Source"  onChange={(event) => {
                    setDatasource(event.target.value);
          }}
        />
                <label>Advisor Type :</label>
                <input type="text" name="advisor" placeholder="Enter Advisor Type"  onChange={(event) => {
                    setAdvisor(event.target.value);
          }}
        />

                <button className="button" onClick={addAdvisor}>Submit</button>
            </div>
        </div>
    )
}

export default DataForm
