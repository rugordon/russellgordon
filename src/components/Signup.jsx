import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Signup.css';

const Signup = () => {
    return (
        <section id="signup" className="signup-section">
            <div className="signup-content">
                <FaPaperPlane className="signup-icon" />
                <h2 className="signup-title">Subscribe to receive updates!</h2>

                <div className="form-wrapper">
                    {/* Embedding the form directly as in original, but ensuring it fits */}
                    {/* Height 840 was in original. */}
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScFuGO_MXbEqn505Au1baEcQw0VKB4Es3w5vjJQdlEfnf1-Rg/viewform?embedded=true"
                        width="100%"
                        height="840"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Subscription Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Signup;
