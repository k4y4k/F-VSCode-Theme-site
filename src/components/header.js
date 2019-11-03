import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const DownloadButton = styled.button`
  background: none;
  color: teal;
  border: none;
`

const FlexSpacer = styled.div`
  flex-grow: 1;
`

const Header = ({ siteTitle }) => (
  <div
    css={css`
      padding: 32px;
      font-size: 24px;
      background: linear-gradient(to bottom, #2a2021, #231b1b);
      color: white;
      display: flex;
    `}
  >
    <h1>{siteTitle}</h1>
    <FlexSpacer></FlexSpacer>
    <DownloadButton>Download</DownloadButton>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
