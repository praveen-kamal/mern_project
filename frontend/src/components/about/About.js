import React from "react";
import { Link } from "react-router-dom";
import Header from "../HeaderComponents/Header";
import "./about.css";

function About() {
    return (
        <div className="about spacer layer-1">
            <Header />
            <div className="about-content">
                <div className="about-header">
                    <h1>About Us</h1>
                </div>

                <div className="about-text">
                    <p>
                        Welcome to CoED, a centralized learning platform
                        designed to redefine your educational experience. At
                        CoED, our mission is to make learning accessible,
                        engaging, and tailored to your unique needs. We believe
                        that education should be a dynamic journey, and our
                        platform reflects this philosophy in every aspect.
                    </p>
                    <p>
                        What sets CoED apart is our commitment to accessibility.
                        We've created a user-friendly interface that caters to
                        learners of all backgrounds and interests. Whether
                        you're a professional seeking to enhance your skills or
                        an enthusiast eager to explore new subjects, CoED
                        provides a diverse range of high-quality courses to meet
                        your evolving needs.
                    </p>
                    <p>
                        Our centralized model ensures the highest standards
                        across all our offerings. Every course on CoED is
                        thoughtfully curated to guarantee excellence in content
                        and delivery. We understand that education is not
                        one-size-fits-all, and our platform reflects this
                        understanding by providing a streamlined learning
                        experience. Say goodbye to overwhelming choices and
                        hello to a simplified, yet enriching educational journey
                        with CoED.
                    </p>
                    <p>
                        As we continue to grow and develop, your feedback is
                        invaluable. We encourage you to share your thoughts and
                        suggestions with us. Your input will play a crucial role
                        in shaping the future of CoED and enhancing the platform
                        to better serve your educational goals.
                    </p>

                    <p>
                        Join us at CoED and embark on a journey where education
                        becomes an adventure. Discover a world of knowledge
                        tailored to your success. Whether you're starting a new
                        chapter in your professional life or simply exploring
                        your passions, CoED is here to be your partner in the
                        exciting realm of online learning. Welcome to a new era
                        of education with CoED!
                    </p>
                </div>

                <div className="call-to-action">
                    <p>Ready to Start your Learning Journey?</p>
                    <button className="cta">
                        <Link to="/courses">
                            Explore Courses Now
                        </Link>
                    </button>
                </div>
            </div>
            <div className="spacer layer-2"></div>
        </div>
    );
}

export default About;
