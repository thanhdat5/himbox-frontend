import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HBPageWrap from "../../components/page-wrap";
import HBPackageList from "./components/packages";
import HBPackageStatistics from "./components/statistics";

const Package = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    return <HBPageWrap className="hb-package" title="Package">
        <HBPackageStatistics />
        <HBPackageList />
    </HBPageWrap>
}
export default Package