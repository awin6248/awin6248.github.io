import './home.css';
import MainImage from "./HomeAssets/Laliguras-1.jpeg";

const Home = () => {
    return (
        <div class='main-content'>
            <div class='header'>
                <div class="head-about">
                    <div class="about">A<br/>B<br/>O<br/>U<br/>T</div>
                    <div class="description-about">Drawing Artist / <br/> Photographer <br/> based in NYC.</div>
                </div>
            </div>
        <div class='work'>
            <img src={MainImage}/>
            <div class='description'>
                <h6>Laliguras 2021</h6>
                <p>2x2in </p>
            </div>
            <div id="footer" class="">
             <p>© Andrew Win All Rights Reserved.</p>
        </div>
        </div>

       
      </div>
    )   
};

export default Home;