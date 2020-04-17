import * as React from "react";
import "./Button.scss";

type ButtonProps = {
  /** 버튼 안에 들어갈 내용 */
  children?: React.ReactNode;
  /** 버튼 크기 */
  size?: "large" | "medium" | "small" | "community-edit" | "join";
  /** 추가 스타일 지정 클래스명 */
  className?: string;
  /** 아웃라인 여부 */
  outline?: boolean;
  /** 버튼 Border-radius 방향 */
  direction?: "right" | "left";
  /** 버튼 색상 */
  color?: "light-gray" | "blue" | "gray" | "full-gray" | "white";
};

/** `Button` 컴포넌트는 사용자의 클릭에 반응하여 트리거할 것을 정의할 때 사용 */
export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  className,
  outline,
  direction,
  color,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`Button ${size} ${color} ${direction} ${
        outline ? "outline" : "none"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "large",
  color: "blue",
  direction: "right",
};
