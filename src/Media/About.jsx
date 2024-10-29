import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    const Skill = [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "70%" },
        { name: "Bootstrap", level: "80%" },
        { name: "JavaScript", level: "70%" },
        { name: "React.Js", level: "80%" }
    ];

    return (
        <div className="container mt-4">
            <div className="Heading-Text text-center">
                <h1>Resume</h1>
                <h2>About <span className="me">ME</span></h2>
            </div>

            <div className="main-content">
                <h3 className="text-center mt-4">Personal Infos</h3>

                <div className="row main-content-box">
                    <div className="col-12 col-md-6">
                        <ul className="list-unstyled">
                            <li><p>First Name: <b>Steve</b></p></li>
                            <li><p>Age: <b>27 Years</b></p></li>
                            <li><p>Freelance: <b>Available</b></p></li>
                            <li><p>Phone: <b>+21621184010</b></p></li>
                            <li><p>Skype: <b>steve.milner</b></p></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <ul className="list-unstyled">
                            <li><p>Last Name: <b>Milner</b></p></li>
                            <li><p>Nationality: <b>Tunisian</b></p></li>
                            <li><p>Address: <b>Tunis</b></p></li>
                            <li><p>Email: <b>you@mail.com</b></p></li>
                            <li><p>Languages: <b>French, English</b></p></li>
                        </ul>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12 col-md-3 col-lg-6 mb-3">
                        <div className="card text-center p-3">
                            <h1>12+</h1>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-6 mb-3">
                        <div className="card text-center p-3">
                            <h1>97+</h1>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-6 mb-3">
                        <div className="card text-center p-3">
                            <h1>81+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-6 mb-3">
                        <div className="card text-center p-3">
                            <h1>53+</h1>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skil-text">
                <h3 className="text-center p-5">Skills</h3>
            </div>

            <div className="skills mt-5 row">
                {Skill.map((skill, index) => (
                    <div key={index} className="col-12 col-md-6 mb-3">
                        <div className="border123 d-flex justify-content-between align-items-center border p-2">
                            <p className="mb-0">{skill.name}</p>
                            <p className="mb-0">{skill.level}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
