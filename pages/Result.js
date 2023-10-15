"use client"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import List from "@/components/List";

const Result = () => {
    const router = useRouter();
    
    const [datas, setDatas] = useState([])

    useEffect(() => {
        if (router.isReady) {
          // Code using query
          const receipts = router.query.receipt.split(/\r?\n/);
          setDatas(receipts)
        }
      }, [router.isReady]);

    // Data
    if (!datas[0]) return <p></p>

    return ( 
        <List result={datas}></List>
     );
}
 
export default Result;