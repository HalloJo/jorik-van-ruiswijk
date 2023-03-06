import cn from "clsx";
import { useMemo } from "react";
import styles from "../Column/Column.module.scss";
import React from "react";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types/Polymorphic";

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

const defaultElement = "div";

type ColumnProps<ColumnType extends React.ElementType = typeof defaultElement> =
  PolymorphicComponentPropWithRef<
    ColumnType,
    {
      as?: ColumnType;
      children: React.ReactNode;
      className?: string;
      width?: string;
      offset?: string;
    }
  >;

type ColumnComponent = <
  ColumnType extends React.ElementType = typeof defaultElement
>(
  props: ColumnProps<ColumnType>
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
const Column: ColumnComponent = React.forwardRef(
  <ColumnType extends React.ElementType = typeof defaultElement>(
    {
      as: givenAs,
      children,
      className: givenClassName,
      width,
      offset,
      ...props
    }: ColumnProps<ColumnType>,
    ref: PolymorphicRef<ColumnType>
  ) => {
    const Component = givenAs || defaultElement;

    const columnClassName = useLayoutClass(width);
    const offsetClassName = useLayoutClass(offset);
    const className = cn(styles.column, columnClassName, givenClassName);
    return (
      <>
        {offsetClassName && <span className={cn(offsetClassName)} />}
        <Component className={className} ref={ref} {...props}>
          {children}
        </Component>
      </>
    );
  }
);

export default Column;

// interface ColumnProps {
//   children: React.ReactNode;
//   className?: string;
//   width?: string;
//   offset?: string;
// }

// const Column = ({
//   children,
//   className: givenClassName,
//   width = "",
//   offset = "",
//   ...props
// }: ColumnProps) => {
//   const columnClassName = useLayoutClass(width);
//   const offsetClassName = useLayoutClass(offset);
//   const className = cn(styles.column, columnClassName, givenClassName);

//   return (
//     <>
//       {offsetClassName && <span className={cn(offsetClassName)} />}
//       <motion.div className={className} {...props}>
//         {children}
//       </motion.div>
//     </>
//   );
// };

// export default Column;
