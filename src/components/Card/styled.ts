import styled from "styled-components";

export const Card = styled.div`

    figure {
        background: ${({ theme }) => theme.colors.grayLighter};
        margin: 0;
        text-align: center;
        border-radius: 6px;
        height: 223px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 150px;
        }
    }

    .info {
        padding: 5px 20px;

        span {
            &.number {
                color: ${({ theme }) => theme.colors.gray};
                font-size: 1.5rem;
            }
        }
        h5 {
            font-size: 2.3rem;
            text-transform: capitalize;
            margin: 10px 0;
            color: ${({ theme }) => theme.colors.black};
        }
    }

`