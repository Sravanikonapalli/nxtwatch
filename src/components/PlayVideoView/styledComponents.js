import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const VideoStatus = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  color: ${props => props.color};  
`
export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Dot = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
export const Buttoncontainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Button = styled.button`
  color: ${props => props.color};
  border-radius: 10px;
  width: 100px;
  height: 40px;
`
export const BtnCon = styled.div`
  display: flex;
`
export const BtnText = styled.span`
  margin-left: 5px;
  color: #2563eb;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HrLine = styled.hr`
  border: 1pxx solid #909090;
`
export const ChanelImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelCon = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
  margin: 0;
`
export const Subscribers = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
