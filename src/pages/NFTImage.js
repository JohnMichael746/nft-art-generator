const NFTImage = ({className}) => {
    return (
        <div className={`${className} relative`}>
            <img className="border-2" src={`${process.env.PUBLIC_URL}/assets/img/mouth/Happy5.png`} alt="" />
            <div className="absolute bg-opacity-50 bg-black text-white px-2 bottom-0">ID 1</div>
            <div className="absolute bg-opacity-50 bg-black text-white px-2 bottom-0 right-3">RAND 345</div>
        </div>
    )
};

export default NFTImage;