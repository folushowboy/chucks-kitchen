import styles from "./ProteinCard.module.css";
import { useState } from "react";

function ProteinCard() {
  const [selectedProtein, setSelectedProtein] = useState(null);

  const handleProteinChange = (value) => {
    setSelectedProtein((prev) => (prev === value ? null : value));
  };

  return (
    <div className={styles.protein_card}>
        <h3>Choose Your Protein</h3>
      <div className={styles.protein_card_content}>
        <div className={styles.protein_card_header}>
          <label>
            <input
              type="radio"
              checked={selectedProtein === "default"}
              onChange={() => handleProteinChange("default")}
              name="protein"
              id="default"
            />
            <p> Fried Chicken</p>
          </label>
          <div>
            <p>(Default)</p>
          </div>
        </div>

        <div className={styles.protein_card_header}>
          <label>
            <input
              type="radio"
              checked={selectedProtein === "option1"}
              onChange={() => handleProteinChange("option1")}
              name="protein"
              id="grilled-chicken"
            />
            <p> Grilled Fish</p>
          </label>
          <div>
            <p>+₦500</p>
          </div>
        </div>

        <div className={styles.protein_card_header}>
          <label>
            <input
              type="radio"
              checked={selectedProtein === "option2"}
              onChange={() => handleProteinChange("option2")}
              name="protein"
              id="bbq-chicken"
            />
            <p> Beef</p>
          </label>
          <div>
            <p>+₦500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProteinCard;
