import { useEffect, useState } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import HBPageWrap from "../../components/page-wrap"
import BigNumber from 'bignumber.js';
import ProcessingModal from "../../components/processing-modal"
import { ACTION_STATUS } from "../../constants"
import { useActiveWeb3React } from "../../hook"
import { getAllowanceHIMToken, getAllowanceToken } from "../../hook/useAllowance"
import { getPrivateSaleConfigs, getPrivateSaleHimInfo, getPrivateSaleUserInfo, UseApprovePoolHIMContract, UseBuyHim } from "../../hook/useHimContract"
import { USDT_ADDRESS } from "../../_config"
import HBHimPurchase from "./components/him-purchase";
import HBPoolStatistics from "./components/statistics";
import HBPoolStatistics2 from "./components/statistics-2";
import HIMPriceHistory from "./components/him-price";
import HBCard from "../../components/card";

const HimPool = () => {

    const dispatch = useDispatch();
    const { account, library, chainId } = useActiveWeb3React();

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(0);
    const [hash, setHash] = useState('');
    const [approving, setApproving] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (library) {
            getHIMPrivateSaleInfo();
            getHIMPrivateSaleConfig();
            if (account) {
                getHIMPrivateSaleUserInfo();
            }
        }
    }, [account, library]);

    const getHIMPrivateSaleUserInfo = async () => {
        const res = await getPrivateSaleUserInfo({ web3Provider: library?.provider, account });
        console.log('getHIMPrivateSaleUserInfo', res);
    }

    const getHIMPrivateSaleInfo = async () => {
        const res = await getPrivateSaleHimInfo({ web3Provider: library?.provider, account });
        console.log('getHIMPrivateSaleInfo', res);
    }

    const getHIMPrivateSaleConfig = async () => {
        const res = await getPrivateSaleConfigs({ web3Provider: library?.provider, account });
        console.log('getHIMPrivateSaleConfig', res);
    }

    const handleBuyHIMInternal = async () => {
        UseBuyHim({ web3Provider: library?.provider, amount: 10, account }, async (result: any) => {
            console.log('result 1 ==>>', result);
            if (result.status === ACTION_STATUS.BUY_HIM_SUCCESS) {
                setHash(result?.txID);
                setTimeout(() => {
                    setLoading(1);
                    if (account) {
                        // refetch data
                    }
                }, 3000);
            }
            if (result.status === ACTION_STATUS.BUY_HIM_FAIL) {
                setLoading(-1);
                // setError(result?.message);
            }
        })
    }

    const handleBuyHIM = async () => {
        await setVisible(true);
        setLoading(0);
        setApproving(true);
        const allowance = await getAllowanceHIMToken({ web3Provider: library, currencyAddress: USDT_ADDRESS, account });
        const bigAllowance = new BigNumber(allowance);
        if (bigAllowance.gte(new BigNumber(Number(10) * 10 ** 6))) {
            setApproving(false);
            handleBuyHIMInternal();
        } else {
            setApproving(true);
            UseApprovePoolHIMContract({ web3Provider: library?.provider, account: account }, (approveResult: any) => {
                console.log('approveResult', approveResult);
                if (approveResult.status === ACTION_STATUS.APPROVED) {
                    setApproving(false);
                    handleBuyHIMInternal();
                }
                if (approveResult.status === ACTION_STATUS.APPROVE_FAILS) {
                    setVisible(false);
                    setApproving(false);
                    return;
                }
            });
        }
    }

    return <HBPageWrap className="hb-profile" title="HIM Private Sale">
        {/* Style 1 */}
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

        {/* Style 2 */}
        <hr/>
        <Row className="mb-lg-3">
            <Col xxl={3} xl={4} lg={6} md={6} className="mb-md-0">
                <HBPoolStatistics />
            </Col>
            <Col xxl={4} xl={5} lg={6} md={6} className="mb-md-0">
                <HBHimPurchase />
            </Col>
        </Row>
        <HIMPriceHistory />

        <ProcessingModal
            action="Buying"
            visible={visible}
            hash={hash}
            loading={loading}
            approving={approving}
            error={error}
            onCancel={() => {
                setHash('');
                setLoading(0);
                setApproving(false);
                setVisible(false);
            }}
        />
    </HBPageWrap>
}
export default HimPool