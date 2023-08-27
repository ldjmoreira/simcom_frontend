import React, {  useState,useMemo } from "react";
import {
  Container
} from "reactstrap";
//Import Breadcrumb


import { del, get, post, put } from "../../helpers/api_helper";
import Breadcrumbs from "../../components/Common/Breadcrumb";




//i18n
import { withTranslation } from "react-i18next";
const Dashboard = props => {







  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />

          </Container>
          </div>
    </React.Fragment>
  );
};


export default withTranslation()(Dashboard);
