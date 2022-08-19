import { Table } from "react-bootstrap"
import { PACKAGE_RANKING_TYPES } from "../../../constants";
import { formatNumberDownRound } from "../../../utils/helpers";

interface HBNetworkMembersProps {
    data: any
}

const HBNetworkMembers = ({ data = [] }: HBNetworkMembersProps) => {
    console.log('data', data);
    return <div className="hb-network-members-list">
        <Table responsive className="mb-0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Referrer ID</th>
                    <th>Package</th>
                    <th>HIM (Lock)</th>
                    <th className="text-end">Rank</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row: any, index: number) => {
                    return (
                        <tr key={'his' + index}>
                            <td>{row?.user_id}</td>
                            <td>{row?.sponsor}</td>
                            <td>{PACKAGE_RANKING_TYPES[row?.profit_type]}</td>
                            <td>{formatNumberDownRound(row?.him_amount)}</td>
                            <td className="text-end">{row?.rank}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    </div>
}
export default HBNetworkMembers