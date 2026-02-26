import styles from "./Instruction.module.css";

function Instruction() {
  return (
    <div className={styles.istruction_card}>
      <h3>Special Instructions</h3>
      <div className={styles.istruction_card_content}>
        <p>
          E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is
          tasty
        </p>
      </div>
    </div>
  );
}

export default Instruction;
