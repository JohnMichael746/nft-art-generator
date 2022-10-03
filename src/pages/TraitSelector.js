const TraitSelector = ({ className }) => {
    return (
        <div className={className}>
            <div className="mb-3">
                <button className="btn btn-outline-dark">Random</button>
                <button className="btn btn-primary ml-3">Add</button>
            </div>
            <hr />
            <div className="mt-3">
                <strong>Creature</strong>
                <div className="d-flex">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Creature" id="Cinderella" />
                        <label className="form-check-label" htmlFor="Cinderella">
                            Cinderella
                        </label>
                    </div>
                    <div className="form-check ml-3">
                        <input className="form-check-input" type="radio" name="Creature" id="FadePink" />
                        <label className="form-check-label" htmlFor="FadePink">
                            Fade Pink
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TraitSelector;