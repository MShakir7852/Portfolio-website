import React from 'react';

export default function About() {
    return (
        <div>
            <div className='Heading-Text'>
                <h1>Resume</h1>
                <h2 className="text">About <span className='me'>ME</span></h2>
            </div>
            <div className="main-content">
                <h1>personal infos</h1>
                <div className="main-content-box">
                    <div className="box">
                        <div className="box-content">
                            <ul >
                                <li><p>first name: <b>Steve</b></p></li>
                                <li><p>Age: <b>27 Years</b></p></li>
                                <li><p>Freelance: <b>Available</b></p></li>
                                <li><p>Phone: <b>+21621184010</b></p></li>
                                <li><p>Skype: <b>steve.milner</b></p></li>
                            </ul>
                            <ul>
                                <li><p>last name:<b>Milner</b></p></li>
                                <li><p>Nationality: <b>Tunisian</b></p></li>
                                <li><p>Address:  <b>Tunis</b></p></li>
                                <li><p>Email: <b>you@mail.com</b></p></li>
                                <li><p>langages:  <b>French, English</b></p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="box box-2  col-12 col-md-6 col-lg-4">
                        <div className='card'>
                            <h1>12+</h1>
                            <p>Year Of Experiance</p>
                        </div>
                        <div className="card">
                            <h1>97+</h1>
                            <p>Year Of Experieance</p>
                        </div>
                        <div className="card">
                            <h1>81+</h1>
                            <p>Year Of Experieance</p>
                        </div>
                        <div className="card">
                            <h1>53+</h1>
                            <p>Year Of Experieance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skil-text">
                <h1 className='text-center p-5'>Skill</h1>
            </div>
            <div className="skills w-100">
                <div class="progress w-100">
                  
                </div>
            </div>
        </div>
    );
}
