import { useState } from "react";
import styles from "./Extra.module.css";

function Extra() {
    const [selectedextra, setSelectedExtra] = useState("null");

    const handleExtraChange = (value)=>{
        setSelectedExtra(prev => prev === value ? null : value)
    }
  return (
    <div className={styles.extra_card}>
           <h3>Choose Your Extra</h3>
         <div className={styles.extra_card_content}>
           <div className={styles.extra_card_header}>
             <label>
               <input
                 type="radio"
                 checked={selectedextra === "default"}
                 onChange={() => handleExtraChange("default")}
                 name="extra"
                 id="extra"
               />
               <p> Fried Plantain</p>
             </label>
             <div>
               <p>(Default)</p>
             </div>
           </div>
   
           <div className={styles.extra_card_header}>
             <label>
               <input
                 type="radio"
                 checked={selectedextra === "option1"}
                 onChange={() => handleExtraChange("option1")}
                 name="extra"
                 id="extra"
               />
               <p>Coleslaw</p>
             </label>
             <div>
               <p>+₦500</p>
             </div>
           </div>
   
           <div className={styles.extra_card_header}>
             <label>
               <input
                 type="radio"
                 checked={selectedextra === "option2"}
                 onChange={() => handleExtraChange("option2")}
                 name="extra"
                 id="extra"
               />
               <p>Extra Pepper Sauce</p>
             </label>
             <div>
               <p>+₦500</p>
             </div>
           </div>
         </div>
       </div>
     );
}

export default Extra