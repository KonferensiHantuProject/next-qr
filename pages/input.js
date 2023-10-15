import { useState } from "react";
import Router from "next/router";

const Input = () => {

    // Data
    const [receipt, setReceipt] = useState('');

    async function onSubmit(event) {
        event.preventDefault()

        // Make Object
        const data = { receipt };

        // Result
        const result = data.receipt;

        // Send Props
        Router.push({
            pathname: "/result",
            query: {
                receipt: result
            }
        });
    }
     
    return (
        <div className="text-center">
            <label htmlFor="message" className="text-xl block mb-3 font-medium text-gray-900">Type The Receipt Number</label>
            <form onSubmit={onSubmit}>
                <textarea onChange={(e) => setReceipt(e.target.value)} name="receipt" id="message" className="block p-2.5 min-w-250 min-h-250 lg:min-w-750 lg:min-h-500 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                <button type="submit" className="p-3 bg-blue-400 rounded-md mt-5 text-white min-w-[80px]">Anu</button>
            </form>
        </div>
    );
}
 
export default Input;