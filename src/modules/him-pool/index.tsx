import { useEffect, useRef, useState } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import HBPageWrap from "../../components/page-wrap"
import { useActiveWeb3React } from "../../hook"
import HBHimPurchase from "./components/him-purchase";
import HBPoolStatistics2 from "./components/statistics-2";
import HIMPriceHistory from "./components/him-price";
import HBCard from "../../components/card";
import { GET_HIM_SALE_CONFIGS_REQUEST, GET_HIM_SALE_INFO_REQUEST, GET_HIM_SALE_USER_INFO_REQUEST } from "../../redux/types/himPool";

const HimPool = () => {

    const dispatch = useDispatch();
    const interval = useRef<any>();
    const { account, library, chainId } = useActiveWeb3React();

    useEffect(() => {
        dispatch({ type: GET_HIM_SALE_CONFIGS_REQUEST, data: { library, account } });
        dispatch({ type: GET_HIM_SALE_INFO_REQUEST, data: { library, account } });
        interval.current = setInterval(() => {
            dispatch({ type: GET_HIM_SALE_CONFIGS_REQUEST, data: { library, account } });
            dispatch({ type: GET_HIM_SALE_INFO_REQUEST, data: { library, account } });
        }, 15000);
        return () => {
            if (interval) clearInterval(interval.current);
        }
    }, []);

    useEffect(() => {
        if (library && account) {
            dispatch({ type: GET_HIM_SALE_CONFIGS_REQUEST, data: { library, account } });
            dispatch({ type: GET_HIM_SALE_INFO_REQUEST, data: { library, account } });
            dispatch({ type: GET_HIM_SALE_USER_INFO_REQUEST, data: { library, account } });
        }
    }, [account, library]);



    return <HBPageWrap className="hb-profile" title="HIM Private Sale">
        <div className="mb-5">
            <HBPoolStatistics2 />
            <Row>
                <Col xl={4} lg={5} className="mb-md-0">
                    <HBHimPurchase />
                </Col>
                <Col xl={8} lg={7} className="mb-md-0">
                    <HBCard className="mb-md-4 mb-3 h-100-md-4-3">
                        <HIMPriceHistory />
                    </HBCard>
                </Col>
            </Row>
        </div>
    </HBPageWrap>
}
export default HimPool