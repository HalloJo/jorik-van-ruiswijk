import cn from "clsx";
import { useMemo } from "react";
import styles from "../Column/Column.module.scss";

function useLayoutClass(value = "", prefix: string = undefined) {
  return useMemo(
    () =>
      !value
        ? undefined
        : value
            .split(" ")
            .map((col) => (col.includes(":") ? col : `xs:${col}`))
            .map((col) =>
              prefix
                ? styles[`${prefix}-${col.split(":").join("-")}`]
                : styles[col.split(":").join("-")]
            ),
    [value, prefix]
  );
}

interface ColumnProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  offset?: string;
}

const Column = ({
  children,
  className: givenClassName,
  width = "",
  offset = "",
  ...props
}: ColumnProps) => {
  const columnClassName = useLayoutClass(width);
  const offsetClassName = useLayoutClass(offset);
  const className = cn(styles.column, columnClassName, givenClassName);

  return (
    <>
      {offsetClassName && <span className={cn(offsetClassName)} />}
      <div className={className} {...props}>
        {children}
      </div>
    </>
  );
};

export default Column;
