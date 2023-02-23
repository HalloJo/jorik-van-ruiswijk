import cn from "clsx";
import styles from "../Row/Row.module.scss";

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

const Row = ({ children, className, ...props }: RowProps) => {
  return (
    <div className={cn(styles.row, className)} {...props}>
      {children}
    </div>
  );
};

export default Row;
