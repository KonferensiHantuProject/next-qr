import { useEffect, useState } from "react";
import QRCode from 'qrcode'

const List = ({result}) => {
    
    // Data
    const [data, setData] = useState(result)
    const [final, setFinal] = useState([])

    // QR
    const QRS = [];

    // New Array
    data.map(async result => { 
        QRS.push(await QRCode.toDataURL(result)) 
        setFinal(QRS);
    });

    return (
        <div className="block text-center">
            <table className="table-auto border-collapse border text-center min-w-250 lg:min-w-750 mb-8">
            <thead>
                <tr>
                <th className="border border-slate-950">No.</th>
                <th className="border border-slate-950">QR Code</th>
                </tr>
            </thead>
            <tbody>
                {final.map((result, index) => (
                    <tr key={index}>
                    <td className="border border-slate-950 lg:font-extrabold lg:text-4xl">{index + 1}</td>
                    <td className="border border-slate-950 flex justify-center"><img className="mt-3 mb-3 lg:w-36" src={result} alt="Pict" /></td>
                    </tr>
                ))}
            </tbody>
            </table>
            
            <a href="/" className="p-3 bg-blue-500 rounded-md text-white">
                <button>Home</button>
            </a>
        </div>
    );
}
 
export default List;