import TraitSelector from "./TraitSelector";

const Compose = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <img className="border-2" src={`${process.env.PUBLIC_URL}/assets/img/mouth/Happy5.png`} alt="" />
            </div>
            <TraitSelector className="col-md-8" />
        </div>
    );
}

export default Compose;