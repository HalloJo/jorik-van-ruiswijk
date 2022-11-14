import styles from "../CloseButton/CloseButton.module.scss";

type CloseButtonProps = {
  open: string;
  setOpen: (string) => void;
};

const CloseButton = ({ open, setOpen }: CloseButtonProps) => {
  return (
    <div className={styles.closeButton} onClick={() => setOpen(!open)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.799"
        height="19.799"
        viewBox="0 0 19.799 19.799"
      >
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="25"
          height="3"
          transform="translate(2.121) rotate(45)"
          fill="#F9F2E9"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="25"
          height="3"
          transform="translate(0 17.678) rotate(-45)"
          fill="#F9F2E9"
        />
      </svg>
    </div>
  );
};

export default CloseButton;
