import styled from "styled-components";
import {PropsWithChildren} from "react";

const PageBreakerStyle = styled.div`
  @media print {
    * {
      display: none;
    }
  }

  @media screen {
    color:gray;
    display: flex;
    align-items: center;
    margin: 0.5cm 0;
    user-select: none;

    hr {
      flex: 1;
      margin: 0;
      border: none;
      border-top: 2px dotted gray;
    }

    p {
      margin: 0 0.5rem;
    }
  }
`

export function PageBreaker() {
    return <PageBreakerStyle className="break-before">
        <hr/>
        <p>( page break )</p>
        <hr/>
    </PageBreakerStyle>
}

export function PageBreakAvoid({children}:PropsWithChildren<{}>){
    return <p className="avoid-break-inside">
        {children}
    </p>
}

export function NoReformat({children}:PropsWithChildren<{}>){
    return <div className="no-reformat">
        {children}
    </div>
}