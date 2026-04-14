import React from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Consumer } from "../../layouts/Context";
import { cz, en } from "../../content/important";

const Important = () => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp(filter: { fixed: { src: { regex: "/important-/" } } }) {
          edges {
            node {
              id
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <RightPanel>
          <Consumer>
            {({ int }) => {
              const links = int === "en" ? en : cz;
              return (
                <GridWrapper>
                  {links.resourcesList.map((resource) => {
                    const img = data.allImageSharp.edges.filter(i =>
                      i.node.fixed.src.includes(resource.img)
                    );
                    const imgSrc = img.length ? img[0].node.fixed.src : null;
                    const isExternal = resource.linkTo.startsWith("http");
                    return isExternal ? (
                      <ResourceBoxAnchor href={resource.linkTo} key={resource.name} img={imgSrc} target="_blank" rel="noopener noreferrer" />
                    ) : (
                      <ResourceBox to={resource.linkTo} key={resource.name} img={imgSrc} target="_blanc" />
                    );
                  })}
                </GridWrapper>
              );
            }}
          </Consumer>
        </RightPanel>
      );
    }}
  />
);

export default Important;

Important.propTypes = {
  text: PropTypes.object,
  data: PropTypes.object
};

const RightPanel = styled.div`
  flex: 1;
  border-left: 1px solid ${props => props.theme.grey};
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 2em;
  line-height: 1em;
  display: flex;
  justify-content: center;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
    padding-top: 1em;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 10vw));
  grid-template-rows: repeat(2, minmax(200px, 10vw));
  grid-gap: 20px;
  @media (max-width: ${props => props.theme.largeDevice}) {
    grid-template-columns: repeat(3, minmax(20vw, 1fr));
    grid-template-rows: repeat(2, minmax(20vw, 1fr));
  }
  @media (max-width: 620px) {
    grid-template-columns: repeat(1, minmax(200px, 200px));
    grid-template-rows: repeat(6, minmax(200px, 200px));

  }
`;

const ResourceBoxAnchor = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover:after {
    box-shadow: 2px 2px 3px grey;
  }

  ::after {
    content: "";
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border: 0.5px solid gray;
    border-radius: 12%;
    box-shadow: 5px 5px 5px grey;
  }
`;

const ResourceBox = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover:after {
    box-shadow: 2px 2px 3px grey;
  }

  ::after {
    content: "";
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border: 0.5px solid gray;
    border-radius: 12%;
    box-shadow: 5px 5px 5px grey;
  }
`;
