import { useEffect, useState } from "react";

const List = ({result}) => {
    
    // Data
    const [data, setData] = useState(result)

    return (
        <>
            {data.map((result, index) => (
                <div key={index}>
                    <p>a {result}</p>  
                </div> 
            ))}
        </>
    );
}
 
export default List;