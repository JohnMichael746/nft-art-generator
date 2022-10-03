import { useState } from "react";
import FilterOption from "./FilterOption";
import NFTImage from "./NFTImage";

const Generate = () => {
    const [filters, setFilter] = useState([]);

    return (
        <div>
            <div className="flex justify-between mb-3">
                <div className="flex align-items-center form-group relative">
                    <div className="absolute left-6">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></svg>
                    </div>
                    <select className="form-select ml-2 pl-10" aria-label="Default select example">
                        <option selected>ID: Asc</option>
                        <option value="1">ID: Desc</option>
                        <option value="2">Rand: Rare to Common</option>
                        <option value="3">Rand: Common to Rare</option>
                    </select>
                    {
                        filters.map(
                            (idx, filter) =>
                                <FilterOption
                                    key={idx}
                                    onDelete={(k) => {
                                        const _filters = [...filters];
                                        _filters.splice(k, 1);
                                        setFilter(_filters);
                                    }}
                                />
                        )
                    }
                    <button className="text-gray-800 hover:bg-gray-300 bg-gray-200 font-medium rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 ml-2 focus:outline-none"
                        onClick={() => setFilter([...filters, {}])}>
                        <i class="fa fa-filter"></i>
                    </button>
                    <div className="d-flex align-middlxe ml-3">
                        <span className="d-flex align-items-center">360Tokens</span>0
                    </div>

                    <button className="text-gray-800 hover:bg-gray-300 bg-gray-200 font-medium rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 ml-2 focus:outline-none" disabled={true}>
                        <i class="fa fa-ban"></i>
                    </button>
                    <button className="btn btn-danger font-medium rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 ml-2 focus:outline-none">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
                <div className="d-flex align-items-center">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" />
                    </div>
                    <input className="form-control w-[80px]" type="number" defaultValue={20} min={0} />
                    <button className="text-gray-800 hover:bg-gray-300 bg-gray-200 font-medium rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 ml-2 focus:outline-none" disabled={true}>
                        <i class="fa fa-random"></i>
                    </button>
                    <button className="btn btn-primary font-medium rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 ml-2 focus:outline-none">
                        <i class="fa fa-rocket"></i>
                    </button>
                </div>
            </div>
            <div className="row">
                <NFTImage className="col-md-2"/>
                <NFTImage className="col-md-2"/>
                <NFTImage className="col-md-2"/>
                <NFTImage className="col-md-2"/>
                <NFTImage className="col-md-2"/>
                <NFTImage className="col-md-2"/>
            </div>
        </div>
    );
};

export default Generate;