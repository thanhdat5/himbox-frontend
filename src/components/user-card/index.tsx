import { get } from "lodash";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { PACKAGE_RANKING_TYPES } from "../../constants";

const PACKAGE_MAPPING: any = {
    0: 'noRank.png',
    1: 'rank1.png',
    2: 'rank2.png',
    3: 'rank3.png',
    4: 'rank4.png',
    5: 'rank5.png',
    6: 'rank6.png',
    7: 'rank7.png',
    8: 'rank8.png',
    9: 'rank9.png',
    10: 'rank10.png',
    11: 'rank10.png',
    12: 'rank10.png',
};

const HBUserCard = ({ userLogged }: any) => {

    const username = useSelector(state => get(state, 'user.userInfo.username', 'HimBox'));
    const myPackage = useSelector(state => get(state, 'dashboard.statistics[0].package', null));

    console.log('asasasasas', PACKAGE_RANKING_TYPES[get(myPackage, 'profit_type', 1)]);
    return <div className="mb-md-4 mb-3">
        <div className="hb-user-card">
            <Image
                src={`/images/cards/${PACKAGE_MAPPING[PACKAGE_RANKING_TYPES[get(myPackage, 'profit_type', 1)]]}`}
                alt={PACKAGE_MAPPING[PACKAGE_RANKING_TYPES[get(myPackage, 'profit_type', 1)]]}
            />
            <span>{username}</span>
        </div>
    </div>
}
export default HBUserCard