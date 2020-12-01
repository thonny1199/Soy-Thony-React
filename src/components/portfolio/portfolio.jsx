import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/J1.png";
import Preview2 from "../../assets/J2.png";
import Preview3 from "../../assets/J3.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Mi Mercadito",
          tag: "E-commerce-Partial-Development",
          url: "https://mimercadito.cr/",
        },
        {
          id: "2",
          preview: Preview2,
          title: "UNA Horarios",
          tag: "University-project",
          url: "https://una-horario.web.app/",
        },
        {
          id: "3",
          preview: Preview3,
          title: "Schmidt Marine",
          tag: "Web-Partial-Development",
          url: "https://www.schmidtmarine.org/",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} url={project.url}/>
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="DIGITAL PORTFOLIO" />
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR ME?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
