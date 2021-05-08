import styled from 'styled-components'

export const SeasonsWrapper = styled.div`
 p {
     margin: 5px 0;
 }

 span {
     font-weight: 700;
 }
`;

export const SeasonsList = styled.div`
display: flex;
flex-direction: column;

    .seasons-item {
        display: flex;
        align-items: center;
        margin: 10px 0;

        &:last-child {
            margin-bottom: 0;
        }

        .left {
            flex: 0 0 30px;
            border-right: 1px solid #b0b0b0;
            padding-right: 20%;
        }
        .right {
            padding-left: 20px;
            flex: 1;
        }
    }
`;