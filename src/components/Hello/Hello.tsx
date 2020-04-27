import * as React from "react"

interface HelloTypes {
    /** 컴포넌ㄴ트 내부에 들어갈 내용 */
    text?: string;
}

/** `Hello` 컴포넌트는 사용자의 문자열을 받아서 출력해줍니다. */
export const Hello:React.FC<HelloTypes> = ({text}:HelloTypes) => {
    return (
        <div>Hello <b>{text}</b></div>
    )

}

Hello.defaultProps = {
    text: '문자가 입력되지 않습니다.'
}


