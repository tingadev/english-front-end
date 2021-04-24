
import React from "react";
import TestCategory from "./TestCategory";
import BreadcrumbMain from "../../components/Breadcrumb";
// import { NavbarContext } from "../../components/Navbars/NavbarContext";
import { useParams } from "react-router-dom";
import { EnglishCertificateType, useGetTestCategoriesInfoQuery } from "../../schema/schema";
import { capitalizeFirstLetter } from "../../utils/string";
import Loading from "../../components/Loading";

const Test: React.FC = () => {
  // const { setNavbarColor } = React.useContext(NavbarContext);
  // React.useEffect(() => {
  //   setNavbarColor("bg-brand");
  // }, []);
  const { type } = useParams() as any
  const {data, loading} = useGetTestCategoriesInfoQuery({
    variables: {
      data: {
        certificateType: capitalizeFirstLetter(type) as EnglishCertificateType,
      }
    }
  })
  if(loading){
    return <Loading />
  }
  const testCategories = data?.getTestCategories.testCategories;
  return (
    <div className="noHeader pb-5">
      <BreadcrumbMain />
      <TestCategory testCategories={testCategories}/>
    </div>
  );
};

export default Test;
