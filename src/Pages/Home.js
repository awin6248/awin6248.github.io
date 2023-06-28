import './home.css';

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
            <img src="https://cdn.pixabay.com/photo/2023/06/01/19/39/flower-8034206_1280.jpg"/>
            <div class='description'>
                <h6>Laliguras 2021</h6>
                <p>2x2in </p>
            </div>
        </div>

        <div id="footer" class="">
             <p>© Andrew Win All Rights Reserved.</p>
        </div>
      </div>
    )   
};

export default Home;