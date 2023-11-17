import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Preview0 from "../../assets/J0.png";
import Preview1 from "../../assets/J1.png";
import Preview2 from "../../assets/J2.png";
import Preview3 from "../../assets/J3.png";
import Preview4 from "../../assets/J4.png";
import Preview5 from "../../assets/J5.png";
import Preview6 from "../../assets/J6.png";
import Preview7 from "../../assets/J7.png";
import Preview8 from "../../assets/J8.png";
import Preview9 from "../../assets/J9.png";
import Preview10 from "../../assets/J10.png";
import Preview11 from "../../assets/J11.png";
import Preview12 from "../../assets/J12.png";
import Preview13 from "../../assets/J13.png";
import Preview14 from "../../assets/J14.png";
import Preview15 from "../../assets/J15.png";
import Preview16 from "../../assets/J16.png";
import Preview17 from "../../assets/J17.png";
import Preview18 from "../../assets/J18.png";
import Preview19 from "../../assets/J19.png";
import Preview20 from "../../assets/J20.png";
import Preview21 from "../../assets/J21.png";
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
          id: "0",
          preview: Preview0,
          title: "DIGITAL PORTFOLIO (React)",
          tag: "Web-full-Development",
          url: "#",
        },
        {
          id: "1",
          preview: Preview1,
          title: "Mi Mercadito (Angular11+ASP.Net)",
          tag: "E-commerce-Partial-Development",
          url: "/",
        },
        {
          id: "2",
          preview: Preview2,
          title: "UNA Horarios (Angular8+Firebase)",
          tag: "University-project",
          url: "https://una-horario.web.app/",
        },
        {
          id: "3",
          preview: Preview3,
          title: "Schmidt Marine (Wordpress)",
          tag: "Web-Partial-Development",
          url: "https://www.schmidtmarine.org/",
        },
        {
          id: "4",
          preview: Preview4,
          title: "Plugin for Admetricks with Google Data Studio (JS)",
          tag: "Plugin-Development",
          url: "/",
        },
        {
          id: "5",
          preview: Preview5,
          title: "Course for Walmart (React+Scorm2.1)",
          tag: "Web-Partial-Development",
          url: "/",
        },
        {
          id: "6",
          preview: Preview6,
          title: "Doitxr (NextJs)",
          tag: "Web-Partial-Development",
          url: "/",
        },
        {
          id: "7",
          preview: Preview7,
          title: "Weknow (GastbyJs+GraphQL+Drupal)",
          tag: "Web-Partial-Development",
          url: "https://weknowinc.com/",
        },
        {
          id: "8",
          preview: Preview8,
          title: "Animation (Wordpress)",
          tag: "Web-Partial-Development",
          url: "https://pescandofuturoprospero.com/",
        },
        {
          id: "9",
          preview: Preview9,
          title: "Soporte (Wordpress)",
          tag: "Web-Partial-Development",
          url: "/",
        },
        {
          id: "10",
          preview: Preview10,
          title: "Schmidt Marine 2020 annual report (Wordpress)",
          tag: "Web-Partial-Development",
          url: "https://2020annualreport.schmidtocean.org/",
        },
        {
          id: "11",
          preview: Preview11,
          title: "Vida Lab (React+Firebase+Emailjs)",
          tag: "Web-full-Development",
          url: "/",
        },
        {
          id: "12",
          preview: Preview12,
          title: "ShowTime (React+Nodejs+AWS)",
          tag: "Web-Partial-Development",
          url: "/",
        },
        {
          id: "13",
          preview: Preview13,
          title: "Schmidt Marine 2021 annual report (Wordpress)",
          tag: "Web-Partial-Development",
          url: "https://2021annualreport.schmidtocean.org/",
        },
        {
          id: "14",
          preview: Preview14,
          title: "Migrate Adl site (Drupal 8 to Drupal 9)",
          tag: "Back End-Partial-Development",
          url: "https://www.adl.org/",
        },
        {
          id: "15",
          preview: Preview15,
          title: "NOCOE site (Drupal 9)",
          tag: "Back End-Partial-Development",
          url: "https://transportationops.org/",
        },
        {
          id: "16",
          preview: Preview16,
          title: "Saipem site (Drupal 9)",
          tag: "Back End-Partial-Development",
          url: "https://www.saipem.com/",
        },
        {
          id: "17",
          preview: Preview17,
          title: "New Jersey Court site (Drupal 9 - Drupal 10)",
          tag: "Front End-Back End-Partial-Development",
          url: "https://www.njcourts.gov/",
        },
        {
          id: "18",
          preview: Preview18,
          title: "Image Compression (Vanilla JS)",
          tag: "Full-Development",
          url: "https://comprimir-imagenes-rapido-by-thony.web.app/",
        },
        {
          id: "19",
          preview: Preview19,
          title: "System for clinical laboratory, made in (Laravel 9)",
          tag: "Full-Development",
          url: "/",
        },
        {
          id: "20",
          preview: Preview20,
          title: "Office of Justice Programs (Drupal 10)",
          tag: "Front End - Back End-Partial-Development",
          url: "https://www.ojp.gov/",
        },
        {
          id: "21",
          preview: Preview21,
          title: "The Legacy Project (Drupal 10)",
          tag: "Front End - Back End-Partial-Development",
          url: "https://legacyprojectchicago.org/",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
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

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: "NEWEST",
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox
          preview={project.preview}
          key={project.id}
          title={project.title}
          tag={project.tag}
          url={project.url}
        />
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
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("NEWEST")}
          >
            NEWEST
          </p>
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("OLDEST")}
          >
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="DIGITAL PORTFOLIO" />
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="my-masonry-grid"
            columnClassName="mint__gallery"
          >
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
