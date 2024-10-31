import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css'
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container-fluid HomePage">
                    <div className="row">
                        <div className="sid d-none d-lg-block col-lg-4  col-12 col-md-12 col-lg-4"></div>

                        <div className="Img Content text-center col-12 col-md-12 col-lg-4">
                            <img src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/320703409_1753536388350604_4364236800328253782_n.jpg?stp=dst-jpg_tt6&_nc_cat=100&cb=99be929b-d27cf799&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEedno5DvFx3HVvGq1BI8RvqfZFhQ9Jl3qp9kWFD0mXeplHTr04bial6HiutcM0GHyPhZj2QaosUK7crGGOeIPr&_nc_ohc=dG2S335sUw4Q7kNvgHFJleg&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=AV3PsyfZvCpRyylO8bHOm5f&oh=00_AYD-pXnMgDmBJh6h2MUw48dX7mEXkk6Yvc389WL_PmDqcg&oe=6726EF11" alt="Profile" style={{width:"100%",height:"100%",borderRadius:"20px"}} />
                        </div>

                        <div className="contents col-12 col-md-6 col-lg-4">
                            <h1 className="mt-3">I am M.Shakir</h1>
                            <h2>Web Developer</h2>
                            <p>I'm a Tunisian-based web designer & front‑end developer focused on crafting clean & user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me.</p>
                            <div className="aboutbtn d-flex align-items-center mt-3">
                                <button className="btn btn-primary me-2">More About Me</button>
                                <FaArrowRight className="Icon" />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
