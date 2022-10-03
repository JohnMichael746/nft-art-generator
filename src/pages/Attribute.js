import { useState, useRef } from "react";

const Attribute = () => {
    const [imagePath, setImagePath] = useState();
    const btnUploadImage = useRef(null);

    return (
        <div>
            <div className="flex justify-between mb-3">
                <div className="flex align-middle form-group">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <input className="form-control ml-3" type="text" />
                    <div className="d-flex align-middle ml-3">
                        <span className="d-flex align-items-center">131attributes</span>
                    </div>
                </div>
                <button className="text-gray-800 hover:bg-gray-300 bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Batch Upload</button>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">IMAGE</th>
                            <th scope="col">Z-INDEX</th>
                            <th scope="col">PROBABILITY</th>
                            <th scope="col">TYPE</th>
                            <th scope="col">VALUE</th>
                            <th scope="col">DEL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="align-middle">
                            <td className="w-[150px] h-[150px]">
                                <img className="w-full h-full border-2" src={`${process.env.PUBLIC_URL}/assets/img/mouth/Happy5.png`} alt="" onClick={() => btnUploadImage.current.click()} />
                                <input ref={btnUploadImage} accept="image/*" className="d-none" type="file"
                                    onChange={(e) => setImagePath(e.target.value)} />
                            </td>
                            <td className="w-1/12">
                                <input className="form-control" type="number" defaultValue={20} min={0} />
                            </td>
                            <td className="w-1/12">
                                <input className="form-control" type="number" defaultValue={1} min={0} />
                            </td>
                            <td className="w-2/12">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>-</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </td>
                            <td className="w-auto">
                                <input className="form-control" type="text" />
                            </td>
                            <td className="w-1/12">
                                <button className="text-gray-800 hover:bg-gray-300 bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                    <i className="fa fa-trash" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attribute;