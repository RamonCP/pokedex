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

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                &.number {
                    color: ${({ theme }) => theme.colors.gray};
                    font-size: 2rem;
                }
            }
            h3 {
                font-size: 2.3rem;
                text-transform: capitalize;
                margin: 10px 0;
                color: ${({ theme }) => theme.colors.black};
            }
        }

        .box-info {
            display: flex;
            align-items: center;
            h5 {
                width: 100px;
                font-size: 1.7rem;
                margin: 0;
                font-weight: normal;
                color: ${({ theme }) => theme.colors.black};
            }
            .list {
                display: flex;
                gap: 5px;
                span {
                    background: #000;
                    color: #fff;
                    border-radius: 4px;
                    padding: 5px;
                    font-size: 1.5rem;
                    text-transform: capitalize;
                }
                
                p {
                    font-size: 1.5rem;
                    color: ${({ theme }) => theme.colors.black};
                }
            }
        }
    }

`