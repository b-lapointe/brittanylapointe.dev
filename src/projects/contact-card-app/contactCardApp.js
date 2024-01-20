import React from "react"
import ContactCard from "./contactCard"
import * as contactCardStyles from "./card.module.scss"

function ContactApp() {
    return (
        <div className={contactCardStyles.app}>
            <h1>Contacts for The Furr Family</h1>
            <div className={contactCardStyles.contacts}>
                <ContactCard 
                    contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
                />
            
                <ContactCard 
                    contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
                />
            
                <ContactCard
                    contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "fuzzworlds@yahoo.com"}}
                />
            
                <ContactCard 
                    contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
                />
                
                <ContactCard 
                    contact={{name: "Princess", imgUrl: "http://placekitten.com/200/150", phone: "(212) 555-6341", email: "gotfish@gmail.com"}}
                />

                <ContactCard 
                    contact={{name: "Kiwi", imgUrl: "http://placekitten.com/250/100", phone: "(212) 555-4246", email: "stinky@bean.ca"}}
                />

                <ContactCard 
                    contact={{name: "Mittens", imgUrl: "http://placekitten.com/350/150", phone: "(212) 555-1122", email: "hairballs@rgross.ca"}}
                />

                <ContactCard 
                    contact={{name: "Sir Furrball", imgUrl: "http://placekitten.com/450/300", phone: "(212) 555-8907", email: "crazy4treats@shoes.ca"}}
                />
            </div>
        </div>
    )
}

export default ContactApp