import "../assets/css/home.css";
import banner from "../assets/img/home/banner.png"

const Home = () => {
    return (
        <section id="home">
            <div className="banner mb-5">
                <img src={banner} alt="" className="w-100" />
            </div>

            <div className="container mb-5">

                <div className="feature-list row row-cols-1 row-cols-lg-3">
                    <div className="col">
                        <div className="feature-item">
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="feature-item">
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="feature-item">
                            
                        </div>
                    </div>
                    
                </div>

            </div>

        </section>
    )
}
export default Home;