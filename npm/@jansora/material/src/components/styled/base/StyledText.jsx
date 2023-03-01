import styled from 'styled-components';

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/06 10:54:33
 */
const StyledText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--primary-color);
  //font-size: .75rem;
  //height: 100%;
  //line-height: 100%;

  //opacity: .9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  margin: 0;
`
export default StyledText;