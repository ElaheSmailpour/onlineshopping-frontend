import "./styles/contact.css"
const Contact = () => {
    return (
        <div className="Contact">
            <h1>Contact Form</h1>
            <div className="container">
                <form className="contact-form" action="#">
                    <label> First Name:</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <label> Last Name:</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your lastname.." />
                    <label for="subject">Subject:</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." rows="4" cols="150"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact