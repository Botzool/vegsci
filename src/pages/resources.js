import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/resources";

const ResourcesPage = ({ data: imgData }) => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return (
        <Container>
          <GridWrapper>
            {data.resourcesList.map((resource) => {
              const img = imgData.allImageSharp.edges.filter((i) =>
                i.node.fixed.src.includes(resource.img)
              );
              const imgSrc = img.length ? img[0].node.fixed.src : null;
              const isExternal = resource.linkTo.startsWith("http");
              return isExternal ? (
                <ResourceBoxAnchor
                  href={resource.linkTo}
                  key={resource.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  img={imgSrc}
                >
                  {!imgSrc ? resource.name : ""}
                </ResourceBoxAnchor>
              ) : (
                <ResourceBoxLink
                  to={resource.linkTo}
                  key={resource.name}
                  target="_blanc"
                  img={imgSrc}
                >
                  {!imgSrc ? resource.name : ""}
                </ResourceBoxLink>
              );
            })}
          </GridWrapper>
        </Container>
      );
    }}
  </Consumer>
);

ResourcesPage.propTypes = { data: PropTypes.object };

export default ResourcesPage;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20vw);
  grid-template-rows: repeat(3, 20vw);
  grid-gap: 1vw;
  @media (max-width: ${(props) => props.theme.mediumDevice}) {
    grid-template-columns: repeat(3, 28vw);
    grid-template-rows: repeat(3, 28vw);
  }
  @media (max-width: ${(props) => props.theme.smallDevice}) {
    grid-template-columns: repeat(2, 40vw);
    grid-template-rows: repeat(5, 40vw);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;
const ResourceBoxAnchor = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover:after {
    box-shadow: 2px 2px 3px grey;
  }

  ::after {
    content: "";
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 20vw;
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

const ResourceBoxLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover:after {
    box-shadow: 2px 2px 3px grey;
  }

  ::after {
    content: "";
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 20vw;
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

export const query = graphql`
  query {
    allImageSharp(filter: { fixed: { src: { regex: "/resources-/" } } }) {
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
`;
