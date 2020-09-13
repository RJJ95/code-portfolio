import React, { useEffect } from "react";

// Styles
import { Container } from "./sub-menu-style";

// Components
import SubMenuRow from "../../components/constructs/sub-menu-row";
import { ReactComponent as ReactLogo } from "../../assets/images/react-logo.svg";
import { ReactComponent as VueLogo } from "../../assets/images/vue-logo.svg";
import { ReactComponent as AngularLogo } from "../../assets/images/angular-logo.svg";

// API
import useApi from "../../api/useApi";

const SubMenuPage = ({ page }) => {
  const [{ data, isLoading, isError }, api] = useApi("get");

  useEffect(() => {
    getData();
    
  }, [page]);

  async function getData() {
    await api(`/snippets/${page}.json`);
  }

  function getLogo() {
    switch (page) {
      case "react":
        return <ReactLogo />;
      case "vue":
        return <VueLogo />;
      case "angular":
        return <AngularLogo />;
      default:
        break;
    }
  }

  return (
    <Container>
      {getLogo()}
      {data &&
        Object.entries(data).map((keyName, index) => {
          return (
            <SubMenuRow
              key={index}
              label={keyName[0]}
              items={keyName[1]}
              framework={page}
            />
          );
        })}
    </Container>
  );
};

export default SubMenuPage;
