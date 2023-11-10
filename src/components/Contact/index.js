import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import {useState, useEffect, useRef} from "react";
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(()=>{
        setTimeout(() => {
               setLetterClass('text-animate-hover')
           }, 3000)
           //[] , this is for the first render only.
       },[])

    const sendEmail =(e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_jeeq9po',
            'template_tupyoiw',
            refForm.current,
            '4C-5KwJ_87bU087eL'
        )
        .then(
            ()=> {
                alert("Message successfully sent!!")
                window.location.reload(false) 
            },
            () => {
                alert("Failed to send email, Please try again later.")
            }
        )
    }

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["C","o","n","t","a","c","t"," ","m","e"]} idx={15}/> 
                </h1>

                <p align="justify">
                    I am interested in freelance opportunities - especially ambitious on large projects. However, if you have other request or questions, don't hesitate to contact me using below form either. 
                </p>

                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li >
                                <input type="text"name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"></input>
                            </li>
                        </ul>
                    </form>
                </div>
                
           
            </div>

            <div className="info-map">
                    Nitesh Ranjitkar,
                    <br />
                    Nepal,
                    <br />
                    Kathmandu-20,Kathmandu <br />
                    Lakhenani Galli, Majipat <br />
                    <span>iamnranjitkar@gmail.com</span>

                </div>

            <div className="map-wrap">
                    <MapContainer center={[27.7023947,85.3025267]} zoom={25} scrollWheelZoom={false}>
                        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"> */}
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                        <Marker position={[27.7023947,85.3025267]}>
                        <Popup>Nitesh lives here, Visit for a cup of tea.</Popup>
                        </Marker>
                        {/* </TileLayer> */}
                    </MapContainer> 
                </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact;