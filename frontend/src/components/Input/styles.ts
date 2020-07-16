import styled from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  flex: 1;
`;
