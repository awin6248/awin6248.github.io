import './home.css';

const CV = () => {
    return (
        <div className='main-content'>
          <div className='cv-text'><div>Drawing artist and user interface designer based in Queens, New York City</div>
        <div className='cv-list'>
          <br/>
            <div className='cv-header'>Education</div><br/>
            <div className='cv-item'><div className='year'>2014 Masters</div><div>Information Management and Systems <br></br>University of California Berkeley</div></div>
            <div className='cv-item'><div className='year'>2011 BA</div><div> Anthropology, University of California Los Angeles</div></div>
            <div className='cv-header'>Group Exhibitions</div>
            <div className='cv-item'><div className='year'>2022</div><div>Aggregate Space Gallery, Oakland</div></div>
            <div className='cv-item'><div className='year'>2019</div><div>SSHH B.Y.O.A.S.S., NYC</div></div>
            <div className='cv-item'><div className='year'>2016</div><div>Group Exhibition, The Galallery, San Francisco</div></div>
            <div className='cv-item'><div className='year'>2016</div><div>2x2: Group Exhibition, The Galallery, San Francisco</div></div>
            <div className='cv-header'>Art Book and Zine Fairs<br/></div>
            <div className='cv-item'>
                <div className='year'>2021</div>
                <div>NY Art Book Fair<br/></div>
            </div>
            <div className='cv-item'>
                <div className='year'>2019</div>
                <div>LA Art Book Fair<br/></div>
            </div>

            <div className='cv-item'>
                <div className='year'>2018</div>
                <div>NY Tech Zine Fair, New York City</div>
            </div>
            <div className='cv-item'>
                <div className='year'>2018</div>
                <div>8-Ball Zine Fair, New York City Organizations</div>
            </div>
            <div className='cv-item'>
                <div className='year'>2016</div>
                <div>Adobe Books &amp; Arts Cooperative Volunteer, San Francisco</div>
            </div>
        </div>    
        <div className='instagram-link'>IG: <a href="https://www.instagram.com/andrewkwin/" target="_blank"><span>@andrewkwin</span></a></div></div>
      </div>
    )   
};

export default CV;