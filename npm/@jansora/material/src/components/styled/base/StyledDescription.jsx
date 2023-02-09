import styled from 'styled-components';

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/06 10:54:33
 */
const StyledDescription = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--text-color-3);
  font-size: .75rem;
  height: 20px;
  line-height: 20px;

  //opacity: .9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  margin: 0;
`
export default StyledDescription;