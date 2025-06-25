import React, { useState } from "react";
import Featurebox from "./Featurebox";
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';
import PopupForm from "./PopupForm";  // Import PopupForm

function Feature() {
    const [showPopup, setShowPopup] = useState(false);  // State to handle popup visibility

    const handleConsultClick = () => {
        console.log("Consult Now button clicked!");  // Log for debugging
        setShowPopup(true);  // Show popup on button click
    };

    return (
        <div id="features">
            <h1>Our Services</h1>
            <div className="a-container">
                <Featurebox
                    image={fimage1}
                    title="Book Consultation Call"
                    description="Personalized guidance on life, love, career, business, money"
                    onConsultClick={handleConsultClick}  // Pass the click handler as a prop
                />
                <Featurebox
                    image={fimage2}
                    title="Couple Kundali"
                    description="Kundali Milan Horoscope Matching for Marriage"
                    onConsultClick={handleConsultClick}
                />
                <Featurebox
                    image={fimage3}
                    title="Personalized Kundali"
                    description="10+ years Career, Business, Money, Health, Love, Marriage Prediction Report."
                    onConsultClick={handleConsultClick}
                />
                <Featurebox
                    image={fimage4}
                    title="Lal Kitab Report"
                    description="Lal Kitab remedies attract success, prosperity, and positivity."
                    onConsultClick={handleConsultClick}
                />
                <Featurebox
                    image={fimage1}
                    title="Buy Gemstones"
                    description="Explore our diverse collection of astrological guidance gemstones"
                    onConsultClick={handleConsultClick}  // Pass the click handler as a prop
                />
                <Featurebox
                    image={fimage2}
                    title="Baby Name Report "
                    description="Get personalized name suggestions as per numerological explanation"
                    onConsultClick={handleConsultClick}
                />
                <Featurebox
                    image={fimage3}
                    title="Fortune Report"
                    description="Fortune Report help you align with nature, & attract more success, money, & positivity into your life."
                    onConsultClick={handleConsultClick}
                />
                <Featurebox
                    image={fimage4}
                    title="Kaal Sarp & Manglik Dosh Report"
                    description="Kaal Sarp and Manglik Dosh remedies bring balance, success, and peace."
                    onConsultClick={handleConsultClick}
                />
                     <Featurebox
                    image={fimage3}
                    title="Buy Rudraksha"
                    description="Explore our diverse collection of astrological guidance gemstones"
                    onConsultClick={handleConsultClick}
                />
                <Featurebox
                    image={fimage4}
                    title="Lal Kitab Report"
                    description="Lal Kitab remedies attract success, prosperity, and positivity."
                    onConsultClick={handleConsultClick}
                />
            </div>

            {showPopup && <PopupForm setShowPopup={setShowPopup} />}  {/* Render popup when state is true */}
        </div>
    );
}

export default Feature;
