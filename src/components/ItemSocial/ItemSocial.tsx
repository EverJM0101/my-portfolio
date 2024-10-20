import styled from 'styled-components';

const Anchor = styled.a<{ bgColor: string }>`
  display: flex;
  padding-right: 1.8rem;
  align-items: center;
  transition: all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1);
  border-radius: 1.2em;
  padding-top: 0.6em; 
  padding-bottom: 0.6em; 
  margin-right: 1em;
  
  &:hover {
    background-color: ${({ bgColor }) => bgColor};
    color: #fff;
    padding: 0.6em 1.8rem 0.6em 0; 
    margin-right: 0.8em;
    box-shadow: 0 0 5px ${({ bgColor }) => bgColor}, 
    0 0 10px ${({ bgColor }) => bgColor};
    opacity: 0.5;
  }

  &:hover .icon {
    transform: translateX(0.5rem); /* 2px */
  }

  &:hover .username {
    opacity: 1;
    transform: translateX(0);
    width: auto;
  }
`;

const Icon = styled.i`
  font-size: 1.5rem;
`;

const Username = styled.span`margin-left: 0.75rem;
  opacity: 0;
  width: 0;
  overflow: hidden;
  transform: translateX(-0.5rem); /* -2px */
`;

function ItemSocial(props: { url: string, icon: string, color: string, username: string }) {
  return (
    <>
      <Anchor href={props.url} target='_blank' bgColor={props.color}>
        <Icon className={'icon ' + props.icon}></Icon>
        <Username className="username">{props.username}</Username>
      </Anchor>
    </>
  );
}

export default ItemSocial;
