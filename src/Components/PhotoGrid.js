import './photogrid.css';


const PhotoGrid = ({ photos }) => {
    return (
        <div class='flex-container'>
            <img class='flex-item' src="https://cdn.pixabay.com/photo/2023/06/01/19/39/flower-8034206_1280.jpg"/>
            <img class='flex-item' src="https://cdn.pixabay.com/photo/2023/06/19/11/10/hay-8074152_1280.jpg"/>
            <img class='flex-item' src="https://cdn.pixabay.com/photo/2023/06/12/01/22/lotus-8057438_1280.jpg"/> 
            <img class='flex-item' src="https://cdn.pixabay.com/photo/2023/06/19/11/10/hay-8074152_1280.jpg"/>
        </div>
    )   
};

export default PhotoGrid;